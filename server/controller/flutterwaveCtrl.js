const https = require("https");
const { StatusCodes } = require("http-status-codes");
const Transaction = require("../model/Transaction");
const { BadRequestError } = require("../errors");
const Wallet = require("../model/Wallet");
const ObjectId = require("mongoose").Types.ObjectId;

const flutterwave = {
  acceptPayment: async (req, res) => {
    const { name, email, amount, ref } = req.body;
    try {
      if (!name || !email || !ref) {
        throw new BadRequestError("Please fill all field");
      }

      // params
      const params = JSON.stringify({
        tx_ref: ref,
        amount: amount,
        currency: "USD",
        redirect_url: `${process.env.DOMAIN}verify-payment`,
        meta: {
          account: req.user.userId,
        },
        customer: {
          email,
          name,
        },
        customizations: {
          title: "Readiily",
          logo: process.env.DOMAIN + "public/images/Rlogo.png",
        },
      });

      // options
      const options = {
        hostname: "api.flutterwave.com",
        port: 443,
        path: "/v3/payments",
        method: "POST",
        headers: {
          Authorization: "Bearer " + process.env.FLW_SECRET_KEY,
          "Content-Type": "application/json",
        },
      };

      // client request to flutter API
      const clientReq = https
        .request(options, (apiRes) => {
          let data = "";
          apiRes.on("data", (chunk) => {
            data += chunk;
          });
          apiRes.on("end", async () => {
            data = JSON.parse(data);
            return res.status(StatusCodes.OK).json({ ...data });
          });
        })
        .on("error", (error) => {
          console.error(error);
          return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ msg: "An error occurred" });
        });

      clientReq.write(params);
      clientReq.end();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "An error occurred" });
    }
  },
  verifyPayment: async (req, res) => {
    try {
      const { id: ref } = req.params;
      // params
      const params = JSON.stringify({});
      // options
      const options = {
        hostname: "api.flutterwave.com",
        port: 443,
        path: `/v3/transactions/${ref}/verify`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.FLW_SECRET_KEY,
          "content-type": "application/json",
        },
      };
      // client request to flutterwave API
      const clientReq = https
        .request(options, (apiRes) => {
          let data = "";
          apiRes.on("data", (chunk) => {
            data += chunk;
          });
          apiRes.on("end", async () => {
            data = JSON.parse(data);

            if (data && data.data?.status === "successful") {
              if (!ObjectId.isValid(data.data.tx_ref)) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                  msg: "Invalid query parameter: " + data.data.tx_ref,
                });
              }
              const transaction = await Transaction.findOne({
                _id: data.data.tx_ref,
              });

              if (!transaction) {
                return res
                  .status(StatusCodes.NOT_FOUND)
                  .json({ msg: "No transaction with id: " + data.data.tx_ref });
              }

              if (transaction.status === "pending") {
                const wallet = await Wallet.findOne({
                  account: req.user.userId,
                });
                if (wallet) {
                  let balance = wallet.balance;
                  wallet.balance = balance + data.data.amount;
                  await wallet.save();
                  transaction.status = "paid";
                  transaction.flutterTrxId = data.data.id;
                  await transaction.save();
                }
              }
            }

            return res.status(StatusCodes.OK).json({ ...data });
          });
        })
        .on("error", (error) => {
          console.error(error);

          return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: "An error occurred" });
        });

      clientReq.write(params);
      clientReq.end();
    } catch (error) {
      console.error(error);

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "An error occurred" });
    }
  },
};

module.exports = flutterwave;
