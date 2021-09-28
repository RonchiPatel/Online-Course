import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function StudentRegister() {
  const [addStudent, setAddStudent] = useState({
    StudentID: "0",
    Name: "",
    Email: "",
    Phone: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setAddStudent({
      ...addStudent,
      [e.target.name]: value,
    });
    console.log(addStudent);
  };
  const updateStudentInfo = () => {
    // creates entity
    fetch("http://localhost:17575//api/Student/studentaddedit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(addStudent),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <Header></Header>
      <Menu></Menu> */}

      <div className="row">
        {/* left column */}
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Student Registration</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}

            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="studentName"
                  placeholder="Enter student name"
                  onChange={handleChange}
                  name="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="studentEmail"
                  placeholder="abc@gmail.com"
                  onChange={handleChange}
                  name="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="studentPhone"
                  placeholder="978**9855"
                  onChange={handleChange}
                  name="Phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputFile">File input</label>
                <div className="input-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="exampleInputFile"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="exampleInputFile"
                    >
                      Choose file
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <div className="row">
                <div className="col-md-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={updateStudentInfo}
                  >
                    Submit
                  </button>
                </div>
                <div className="col-md-6">
                  <button type="submit" className="btn btn-danger btn-block">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer></Footer> */}
    </>
  );
}
