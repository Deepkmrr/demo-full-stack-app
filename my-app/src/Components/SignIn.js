import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Employee from "./Employee";

const SignIn = () => {
  const [employee, setEmployee] = useState({
    email: "",
    password: "",
  });
  const { email, password } = employee;
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onInputChange = (e) => {
    console.log(e.target.value);
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // navigate(`/employee`);
  const submit = async () => {
    if (employee.email === "" && employee.password === "") {
      alert("Please enter email and password");
    } else {
      const res = await Axios.post(
        `http://localhost:8080/api/employee/checkemployeelogin`,
        employee
      )
        .then((res) => {
          if (res.data.status === 1) {
            navigate(`/employee`);
            console.log(res);
            Cookies.set("name", res.data.accessToken, { expires: 7 });
            Cookies.set("username", res.data.name, { expires: 7 });
            Cookies.set("adminaccess", res.data.AdminAccess, { expires: 7 });
          } else {
            alert("Invalid Credential");
          }
        })
        .catch((err) => {
          alert("Invalid Credentials");
        });
    }
  };

  return (
    <div className="App">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"></div>

                <div className="divider d-flex align-items-center my-4"></div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0"></div>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Link
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={submit}
                  >
                    Login
                  </Link>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link to="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"></div>
      </section>
    </div>
  );
};

export default SignIn;
