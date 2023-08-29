import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
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

  useEffect(() => {
    console.log("useEffect called");
    loadEmployee();
  }, []);

  const onSubmit = async (e) => {
    console.log(employee);
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/api/detailsemployee/${id}`,
      employee
    );
    navigate("/employee");
  };

  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/detailsemployee/${id}`
    );
    console.log("data ", result.data);
    const { Name, Email, Address, Role, Department } = result.data;
    setEmployee({
      name: Name,
      email: Email,
      address: Address,
      role: Role,
      department: Department,
    });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-10">Edit Employee Details</h2>
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
              placeholder="Enter Your Role"
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
              placeholder="Enter Your Department"
              name="department"
              value={department}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <br />
          <button className="btn btn-warning btn-block">Edit Employee</button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
