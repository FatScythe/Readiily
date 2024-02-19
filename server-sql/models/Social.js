module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Brands",
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
