import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Employee = () => {
  const [users, setUser] = useState([]);
  const name = Cookies.get("username");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/detailsemployee/allemployee",
      { headers: { Authorization: `Bearer ${Cookies.get("name")}` } }
    );
    setUser(result.data);
    console.log(result.data);
  };

  const deleteEmployee = async (id) => {
    console.log("employee id", id);
    await axios.delete(`http://localhost:8080/api/detailsemployee/${id}`);
    alert(`${id} is deleted`);

    loadUsers();
  };
  console.log(typeof Cookies.get("adminaccess"));
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <h2>Welcome {name}</h2>
          {Cookies.get("adminaccess") !== "Yes" ? (
            ""
          ) : (
            <>
              <Link className="btn btn-warning" to={"/addemployee"}>
                Add Employee
              </Link>
            </>
          )}

          <br />
          <br />
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Role</th>
                <th scope="col">Department</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Address}</td>
                  <td>{user.Role}</td>
                  <td>{user.Department}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/viewemployee/${user.id}`}
                    >
                      View
                    </Link>
                    {Cookies.get("adminaccess") !== "Yes" ? (
                      ""
                    ) : (
                      <>
                        <Link
                          className="btn btn-outline-primary mr-2"
                          to={`/editemployee/${user.id}`}
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-danger"
                          onClick={() => deleteEmployee(user.id)}
                        >
                          Delete
                        </Link>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
