import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    AdminAccess: "",
    DOB: "",
    PinCode: "",
    Course: "",
    EmailID: "",
    Password: "",
  });
  const {
    FirstName,
    LastName,
    Address,
    AdminAccess,
    DOB,
    PinCode,
    Course,
    EmailID,
    Password,
  } = employee;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log(employee);
    e.preventDefault();
    await Axios.post(
      "http://localhost:8080/api/employee/addEmployee",
      employee
    );
    navigate("/");
  };
  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      bordertopleftradius: ".25rem",
                      borderbottomleftradius: ".25rem",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">registration form</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example1m">
                            First name :{" "}
                          </label>
                          <input
                            type="text"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            name="FirstName"
                            value={FirstName}
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example1n">
                            Last name :{" "}
                          </label>
                          <input
                            type="text"
                            id="form3Example1n"
                            className="form-control form-control-lg"
                            name="LastName"
                            value={LastName}
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example8">
                        Address :{" "}
                      </label>
                      <input
                        type="text"
                        id="form3Example8"
                        className="form-control form-control-lg"
                        name="Address"
                        value={Address}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 className="mb-0 me-4">Admin Access: </h6>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <label className="form-check-label" for="adminyes">
                          Yes{" "}
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="adminyes"
                          value="Yes"
                          name="AdminAccess"
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <label className="form-check-label" for="adminno">
                          No{" "}
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="adminno"
                          value="No"
                          name="AdminAccess"
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example9">
                        DOB :{" "}
                      </label>
                      <input
                        type="text"
                        id="form3Example9"
                        className="form-control form-control-lg"
                        name="DOB"
                        value={DOB}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example90">
                        Pincode :{" "}
                      </label>
                      <input
                        type="text"
                        id="form3Example90"
                        className="form-control form-control-lg"
                        name="PinCode"
                        value={PinCode}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example99">
                        Course :{" "}
                      </label>
                      <input
                        type="text"
                        id="form3Example99"
                        className="form-control form-control-lg"
                        name="Course"
                        value={Course}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example97">
                        Email ID :{" "}
                      </label>
                      <input
                        type="text"
                        id="form3Example97"
                        className="form-control form-control-lg"
                        name="EmailID"
                        value={EmailID}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example97">
                        Password :{" "}
                      </label>
                      <input
                        type="password"
                        id="form3Example97"
                        className="form-control form-control-lg"
                        name="Password"
                        value={Password}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-warning btn-lg ms-2"
                        onClick={onSubmit}
                      >
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
