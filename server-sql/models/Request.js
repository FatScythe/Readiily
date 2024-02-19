const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {}

  Request.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: {
            msg: "Please provide request description",
          },
        },
      },
      design: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a schedule date",
          },
        },
      },
      accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["pending", "done"]],
        },
        defaultValue: "pending",
      },
      // account: {
      //   type: Types.ObjectId,
      //   ref: "Accounts",
      //   required: [true, "Please provide an account"],
      // },
      // brand: {
      //   type: Types.ObjectId,
      //   ref: "Brands",
      //   required: [true, "Please provide a brand"],
      // },
      // designer: {
      //   type: Types.ObjectId,
      //   ref: "Brands",
      // },
    },
    { sequelize, timestamps: true, tableName: "Requests" }
  );

  return Request;
};
