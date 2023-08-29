import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadEmployee();
  });
  const loadEmployee = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/detailsemployee/${id}`
    );
    const { Name, Email, Address, Role, Department } = res.data;
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
      <br />
      <Link className="btn btn-primary" to={"/employee"}>
        Back to Home
      </Link>
      {/* <h1 className="display-4">User ID:{id}</h1> */}
      <hr />
      <ul className="List-group w-50">
        <li className="List-group-item">Name: {employee.name}</li>
        <li className="List-group-item">Email: {employee.email}</li>
        <li className="List-group-item">Address: {employee.address}</li>
        <li className="List-group-item">Role: {employee.role}</li>
        <li className="List-group-item">Department: {employee.department}</li>
      </ul>
    </div>
  );
};

export default ViewEmployee;
