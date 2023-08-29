const db = require("../models");

const employeeDetails = db.EmployeeDetails;

// add employee
const addEmployeeDetails = async (req, res) => {
  let info = {
    Name: req.body.name,
    Email: req.body.email,
    Address: req.body.address,
    Role: req.body.role,
    Department: req.body.department,
  };
  const employee = await employeeDetails.create(info);
  res.status(200).send(employee);
};

// get all employee
const getAllEmployee = async (req, res) => {
  let employee = await employeeDetails.findAll({});
  res.status(200).send(employee);
};

// get single employee by id
const getOneEmployee = async (req, res) => {
  let id = req.params.id;
  let employee = await employeeDetails.findOne({ where: { id: id } });
  res.status(200).send(employee);
};

//update employee
const updateEmployee = async (req, res) => {
  let id = req.params.id;
  const { name, email, address, role, department } = req.body;
  console.log(role, department);
  const employee = await employeeDetails.update(
    {
      Name: name,
      Email: email,
      Address: address,
      Role: role,
      Department: department,
    },
    {
      where: { id: id },
    }
  );
  res.status(200).send(employee);
};

// delete employee
const deleteEmployee = async (req, res) => {
  let id = req.params.id;
  await employeeDetails.destroy({ where: { id: id } });
  res.status(200).send("employee is deleted");
};
module.exports = {
  addEmployeeDetails,
  getAllEmployee,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
};
