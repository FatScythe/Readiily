const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {}

  Account.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: {
            msg: "Please provide a name",
          },
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
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [8, 99],
            msg: "Minimum of 8 character",
          },
        },
      },
      passwordToken: {
        type: DataTypes.TEXT,
      },
      passwordExpirationDate: {
        type: DataTypes.DATE,
      },
      avatar: {
        type: DataTypes.TEXT,
        defaultValue: "/public/images/avatar.png",
      },
      role: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["user", "designer", "admin"]],
          },
        },
        defaultValue: "user",
      },
      referral: {
        type: DataTypes.STRING,
      },
      referralClaim: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      googleId: {
        type: DataTypes.TEXT,
      },
      designerToken: {
        type: DataTypes.TEXT,
      },
      authType: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["email", "google"]],
          },
        },
        defaultValue: "email",
      },
    },
    {
      sequelize,
      timestamps: true,
      tableName: "Accounts",
      hooks: {
        beforeCreate: async (user) => {
          const salt = await bcrypt.genSalt(10);
          const hashedPwd = await bcrypt.hash(user.password, salt);

          user.password = hashedPwd;
        },
      },
    }
  );

  return Account;
};
