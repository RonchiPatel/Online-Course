import React, { useState } from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import db, { storage } from "../../Firebase/Firebaseconfig";
import { useSelector, useDispatch } from "react-redux";
import { set_indicator } from "../../app/reducer";
import { ref, uploadBytes } from "firebase/storage";

export default function StudentRegister(props) {
  const [addStudent, setAddStudent] = useState({
    id: props.studentInfoItem.id,
    Name: props.studentInfoItem.Name,
    Email: props.studentInfoItem.Email,
    Phone: props.studentInfoItem.Phone,
  });

  const [uploadFile, setUploadFile] = useState();
  const indicator = useSelector((state) => state.indicator);
  const dispatch = useDispatch();

  const uploadFileImageFirebase = async () => {
    const storageRef = ref(storage, uploadFile.name);
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, uploadFile).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAddStudent({
      ...addStudent,
      [e.target.name]: value,
    });
    console.log(addStudent);
  };

  const updateStudentInfo = async () => {
    await uploadFileImageFirebase();
    if (addStudent.id) {
      const docRef = doc(db, "StudentDB", addStudent.id);
      setDoc(docRef, addStudent);
    } else {
      addStudent.id = 0;
      const collectionRef = collection(db, "StudentDB");
      const docRef = await addDoc(collectionRef, addStudent);
      console.log("The new ID is: " + docRef.id);
    }
    dispatch(set_indicator(false));
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
                        setAddStudent({
                          ...addStudent,
                          ImageFileName: e.target.files[0].name,
                        });
                      }}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="exampleInputFile"
                    >
                      Choose file
                    </label>
                    <input type="file"></input>
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
