const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {}
  Ticket.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: {
            msg: "Please provide subject",
          },
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: {
            msg: "Please provide message",
          },
        },
      },
      attachments: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["open", "closed", "pending"]],
        },
        defaultValue: "open",
      },
      ticketId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Provide unique ticket id",
          },
        },
      },
      //   response: {
      //     type: [ResponseSchema],
      //   },
      //   account: {
      //     type: Types.ObjectId,
      //     ref: "Accounts",
      //     required: [true, "Please provide an account"],
      //   },
      //   brand: {
      //     type: Types.ObjectId,
      //     ref: "Brands",
      //     required: [true, "Please provide a brand"],
      //   },
    },
    { sequelize, timestamps: true, tableName: "Tickets" }
  );
  return Ticket;
};
