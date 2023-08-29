"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeLogin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeLogin.init(
    {
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Address: DataTypes.STRING,
      AdminAccess: DataTypes.STRING,
      DOB: DataTypes.STRING,
      PinCode: DataTypes.STRING,
      Course: DataTypes.STRING,
      Email: DataTypes.STRING,
      Password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EmployeeLogin",
    }
  );
  return EmployeeLogin;
};
