module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Response",
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      //   account: {
      //     type: Types.ObjectId,
      //     ref: "Accounts",
      //   },
      reply: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide reply",
          },
        },
      },
    },
    { timestamps: true }
  );
};
