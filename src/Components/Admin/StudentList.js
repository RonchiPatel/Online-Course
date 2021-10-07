import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import StudentRegister from "./StudentRegister";
import LoadingComponent from "./LoadingComponent";
import db from "../../Firebase/Firebaseconfig";
import { onSnapshot, collection } from "firebase/firestore";

export default function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [filterStudentList, setfilterStudentList] = useState([]);
  const [show, setShow] = useState(false);
  const [studentInfoItem, setStuentInfoItem] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [Loading, setLoading] = useState(true);
  var temp;
  useEffect(() => {
    onSnapshot(collection(db, "StudentDB"), (snapshot) => {
      setStudentList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setfilterStudentList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
    });
  }, []);

  const searchData = (e) => {
    const x = filterStudentList.filter((data) => {
      return data.Name.includes(e.target.value);
    });
    setStudentList(x);
  };

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Student List</h3>
                  <div className="card-tools">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        name="table_search"
                        className="form-control float-right"
                        placeholder="Search"
                        onChange={searchData}
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                          <i className="fas fa-search" />
                        </button>
                      </div>

                      <div
                        className="input-group-append"
                        style={{ marginLeft: 20 }}
                      >
                        <a
                          onClick={() => {
                            handleShow();
                            setStuentInfoItem({});
                          }}
                          className="btn btn-dark btn-flat text-white"
                        >
                          <i className="fa fa-plus-circle" />
                          Add New Student
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-0">
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Loading && <LoadingComponent />}

                      {studentList &&
                        studentList.map((item, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>

                              <td>{item.Name}</td>
                              <td>{item.Email}</td>
                              <td>{item.Phone}</td>

                              <td>Image</td>
                              <td>
                                <a
                                  href="#"
                                  class="text-muted"
                                  onClick={() => {
                                    setStuentInfoItem(item);

                                    handleShow();
                                    console.log("List", item);
                                    console.log("info", studentInfoItem);
                                  }}
                                >
                                  <i class="fas fa-edit"></i>
                                </a>
                              </td>
                              <td>
                                <a href="#" class="text-muted">
                                  <i class="fas fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudentRegister
            studentInfoItem={studentInfoItem}
            handelClose={handleClose}
          ></StudentRegister>
        </Modal.Body>
      </Modal>
    </>
  );
}
