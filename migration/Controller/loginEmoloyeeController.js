const db = require("../models");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const Employee = db.EmployeeLogin;
const secertKey = "secertKey";
// add employee login
const addEmployee = async (req, res) => {
  let info = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Address: req.body.Address,
    AdminAccess: req.body.AdminAccess,
    DOB: req.body.DOB,
    PinCode: req.body.PinCode,
    Course: req.body.Course,
    Email: req.body.EmailID,
    Password: req.body.Password,
  };
  const employee = await Employee.create(info);
  res.status(200).send(employee);
};

// get single employee login data
const getOneEmployeelogin = async (req, res) => {
  const { email, password } = req.params;
  console.log(email, password);
  let employee = await Employee.findOne({
    where: { email: email, password: password },
  });

  res.status(200).send(employee);
};

const checkEmployeeLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const employee = await Employee.findOne({
    where: { email: email, password: password },
  });
  if (employee) {
    const accessToken = jwt.sign(
      {
        employee: {
          name: employee.FirstName,
          email: employee.Email,
          adminaccess: employee.AdminAccess,
        },
      },
      secertKey,
      { expiresIn: "5m" }
    );
    res.cookie("token", accessToken);
    console.log(accessToken);
    console.log("dsfhsdfhfghggrsrghsrthstdhsdth", employee.AdminAccess);
    res.status(200).json({
      accessToken,
      status: 1,
      name: employee.FirstName,
      AdminAccess: employee.AdminAccess,
    });
  } else {
    res
      .status(400)
      .json({ status: 0, message: "Invalid Credential", AdminAccess: "No" });
    console.log("Email or password is not valid");
  }
};

module.exports = { addEmployee, getOneEmployeelogin, checkEmployeeLogin };
