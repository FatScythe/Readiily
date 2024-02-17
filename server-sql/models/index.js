const { Sequelize } = require("sequelize");
const { db, host, user, password, dialect } = require("../config").postgres;

const sequelize = new Sequelize(db, user, password, {
  host,
  dialect,
  //   logging: false,
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Synced Successfully");
  })
  .catch((err) => {
    console.error("Unable to sync!");
    console.error(err);
  });

module.exports = { sequelize };
