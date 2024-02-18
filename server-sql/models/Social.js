module.exports = (sequelize, DataTypes) => {
  sequelize.define(
    "Brands",
    {
      _id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
      },
      media: {
        type: DataTypes.STRING,
      },
      handle: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: true }
  );
};
