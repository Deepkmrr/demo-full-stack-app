import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
    role: "",
    department: "",
  });
  const { name, email, address, role, department } = employee;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post(
      "http://localhost:8080/api/detailsemployee/employeedetails",
      employee
    );
    navigate("/employee");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-10">Add Employee Details</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your role"
              name="role"
              value={role}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your department"
              name="department"
              value={department}
              onChange={(e) => onInputChange(e)}
            ></input>
            <br />
          </div>
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
