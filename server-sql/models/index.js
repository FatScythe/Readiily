const { Sequelize, DataTypes } = require("sequelize");
const { db, host, user, password, dialect } = require("../config").postgres;
const Account = require("./Account");
const Brand = require("./Brand");
const Social = require("./Social");
const Request = require("./Request");
const Comment = require("./Comment");
const Ticket = require("./Ticket");
const Response = require("./Response");
const Wallet = require("./Wallet");
const Transaction = require("./Transaction");

const sequelize = new Sequelize(db, user, password, {
  host,
  dialect,
  //   logging: false,
});

let models = {
  Account: Account(sequelize, DataTypes),
  Brand: Brand(sequelize, DataTypes),
  Social: Social(sequelize, DataTypes),
  Request: Request(sequelize, DataTypes),
  Comment: Comment(sequelize, DataTypes),
  Ticket: Ticket(sequelize, DataTypes),
  Response: Response(sequelize, DataTypes),
  Wallet: Wallet(sequelize, DataTypes),
  Transaction: Transaction(sequelize, DataTypes),
};

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Synced Successfully");
  })
  .catch((err) => {
    console.error("Unable to sync!");
    console.error(err);
  });

module.exports = { sequelize, ...models };
