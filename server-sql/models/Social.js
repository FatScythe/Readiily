module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Socials",
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
