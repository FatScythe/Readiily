module.exports = (sequelize, DataTypes) => {
  sequelize.define(
    "Brands",
    {
      _id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      colors: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      font: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fontUrl: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Please provide a valid email",
          },
        },
      },
      website: {
        type: DataTypes.STRING,
      },
      logoDark: {
        type: DataTypes.STRING,
      },
      logoWhite: {
        type: DataTypes.STRING,
      },
      industry: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    { timestamps: true }
  );
};
