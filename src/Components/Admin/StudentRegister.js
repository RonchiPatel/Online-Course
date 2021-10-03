import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function StudentRegister(props) {
  const [addStudent, setAddStudent] = useState({
    StudentID: props.studentInfoItem.StudentID,
    Name: props.studentInfoItem.Name,
    Email: props.studentInfoItem.Email,
    Phone: props.studentInfoItem.Phone,
  });
  const [uploadFile, setUploadFile] = useState();
  // console.log("Print Props:", Name);
  const handleChange = (e) => {
    const value = e.target.value;
    setAddStudent({
      ...addStudent,
      [e.target.name]: value,
    });
    console.log(addStudent);
  };
  const updateStudentInfo = (e) => {
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
        addFile(e, response.Student.Data.StudentId);
        props.handelClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addFile = (Fileevent, StudentID) => {
    var formData = new FormData();
    formData.append("name", uploadFile);
    formData.append("StudentID", StudentID);
    console.log("Form Data - ", formData);

    console.log("Upload File, Student Id- ", uploadFile, StudentID);

    fetch("http://localhost:17575//api/Student/UploadStudentProfileImage", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => this.setState({ error, isLoading: false }));
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
                  value={addStudent.Name}
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
                  value={addStudent.Email}
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
                  value={addStudent.Phone}
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
                      onChange={(e) => {
                        setUploadFile(e.target.files[0]);
                      }}
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
