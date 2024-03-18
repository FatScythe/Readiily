module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brands",
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: {
            msg: "Please provide a font name",
          },
        },
      },
      colors: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      font: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: {
            msg: "Please provide a font name",
          },
        },
      },
      fontUrl: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isUrl: true,
        },
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
        validate: {
          isUrl: true,
        },
      },
      logoDark: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      logoWhite: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      industry: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    { timestamps: true }
  );
  return Brand;
};
