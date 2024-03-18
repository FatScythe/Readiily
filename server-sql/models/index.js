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
  // logging: false,
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

// Account X Brand
models.Account.hasMany(models.Brand);
models.Brand.belongsTo(models.Account);
// Account X Request
models.Account.hasMany(models.Request);
models.Request.belongsTo(models.Account);
// Account X Transaction
models.Account.hasMany(models.Transaction);
models.Transaction.belongsTo(models.Account);
// Account X Ticket
models.Account.hasMany(models.Ticket);
models.Ticket.belongsTo(models.Account);
// Account X Wallet
models.Account.hasOne(models.Wallet);
models.Account.hasOne(models.Account);
// Account X Response
models.Account.hasMany(models.Response);
models.Response.belongsTo(models.Account);

// Brand X Request
models.Brand.hasMany(models.Request);
models.Request.belongsTo(models.Brand);
// Brand X Comment
models.Brand.hasMany(models.Comment);
models.Comment.belongsTo(models.Brand);
// Brand X Social
models.Brand.hasMany(models.Social);
models.Social.belongsTo(models.Brand);
// Brand X Ticket
models.Brand.hasMany(models.Ticket);
models.Ticket.belongsTo(models.Brand);

// Comment X Request
models.Request.hasMany(models.Comment);
models.Comment.belongsTo(models.Request);

// Ticket X Response
models.Ticket.hasMany(models.Response);
models.Response.belongsTo(models.Ticket);

sequelize
  .sync({ force: true })
  .then(async () => {
    const user = await models.Account.build({
      name: "Test1",
      email: "test1@email.com",
      password: "secreter",
    }).validate();
    console.log(user.toJSON());
    // console.log(await user.validate());
    console.log("Synced Successfully");
  })
  .catch((err) => {
    console.error("Unable to sync!");
    console.error(err);
  });

module.exports = { sequelize, ...models };
