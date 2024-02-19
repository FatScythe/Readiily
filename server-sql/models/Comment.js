module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Comment",
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: {
            msg: "Please provide comment",
          },
        },
      },
      // brand: {
      //   type: Types.ObjectId,
      //   ref: "Brands",
      //   required: [true, "Please provide a brand"],
      // },
      // request: {
      //   type: Types.ObjectId,
      //   ref: "Requests",
      //   required: [true, "Please provide a request"],
      // },
    },
    { timestamps: true }
  );
};
