const nodemailer = require("nodemailer");
const config = require("./emailConfig");

const sendEmail = async ({ to, subject, html }) => {
  let transporter = nodemailer.createTransport(config);

  return transporter.sendMail({
    from: '"Readiily Support 👻"',
    to,
    subject,
    html: `<img width='100%' height='20%' src="cid:logo"/> ${html}`,
    attachments: [
      {
        filename: "Rlogo.png",
        path: __dirname + "/Rlogo.png",
        cid: "logo",
      },
    ],
  });
};

module.exports = sendEmail;
