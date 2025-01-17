'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSparring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserSparring.belongsTo(models.Category, { foreignKey: "CategoryId" })
      UserSparring.belongsTo(models.User, { foreignKey: "AuthorId" })
      UserSparring.hasOne(models.Sparring, { foreignKey: "UserSparringId" })
    }
  };
  UserSparring.init({
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Team name cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Team name is required"
        },
      }
    },
    teamLogo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Team logo cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Team logo is required"
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Description cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Description is required"
        },
      }
    },
    schedule: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Schedule cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Schedule is required"
        },
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Location cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Location is required"
        },
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "status cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "status is required"
        },
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Category cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Category is required"
        },
      }
    },
    AuthorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Author id cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Author id is required"
        },
      }
    },
  }, {
    sequelize,
    modelName: 'UserSparring',
  });
  return UserSparring;
};