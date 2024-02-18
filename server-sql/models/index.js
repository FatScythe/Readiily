const { Sequelize, DataTypes } = require("sequelize");
const { db, host, user, password, dialect } = require("../config").postgres;
const Account = require("./Account");
const Brand = require("./Brand");
const Social = require("./Social");

const sequelize = new Sequelize(db, user, password, {
  host,
  dialect,
  //   logging: false,
});

let models = {
  Account: Account(sequelize, DataTypes),
  Brand: Brand(sequelize, DataTypes),
  Social: Social(sequelize, DataTypes),
};

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Synced Successfully");
  })
  .catch((err) => {
    console.error("Unable to sync!");
    console.error(err);
  });

module.exports = { sequelize, ...models };
