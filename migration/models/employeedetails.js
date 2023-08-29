"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeDetails.init(
    {
      Name: DataTypes.STRING,
      Email: DataTypes.STRING,
      Address: DataTypes.STRING,
      Role: DataTypes.STRING,
      Department: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EmployeeDetails",
    }
  );
  return EmployeeDetails;
};
