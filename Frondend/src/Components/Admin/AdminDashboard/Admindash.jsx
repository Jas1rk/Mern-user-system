import React, { useEffect, useState } from "react";
import { AdminNavbar, AdminSearch } from "../..";
import { getUsers, deletUser, editUser } from "../../../Redux/Admin/adminThunk";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import UseForm from "../../../Hooks/useForm";
import "./Admindash.css";
import { unwrapResult } from "@reduxjs/toolkit";

const Admindash = () => {
  const [isEdit, setEdit] = useState(null);
  const userData = useSelector((state) => state.admin.filterusers);
  const dispatch = useDispatch();
  const [values, handlechange, setValues] = UseForm({
    username: "",
    email: "",
    mobile: "",
  });
  const { username, email, mobile } = values;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const hadleDelete = (userid) => {
    dispatch(deletUser({ userid, toast }));
  };

  const handleEdit = (userid, username, email, mobile) => {
    setEdit(userid);
    setValues({ username, email, mobile });
  };

  const handleSave = async (userid) => {
    try {
      const result = await dispatch(
        editUser({ userid, username, email, mobile, toast })
      );
      unwrapResult(result);
      setEdit(null);
    } catch (err) {
      console.log("error is here", err);
    }
  };

  return (
    <>
      <Toaster />
      <AdminNavbar />
      <div className="main">
        <h1>users</h1>
        <AdminSearch />

        <table className="heading-table">
          <thead>
            <tr>
              <th className="heading">Username</th>
              <th className="heading">Email</th>
              <th className="heading">Mobile</th>
              <th className="heading">Edit</th>
              <th className="heading">Action</th>
            </tr>
          </thead>
          {userData.map((user) => (
            <tbody key={user._id}>
              <tr className="list">
                {isEdit === user._id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="username"
                        id=""
                        placeholder="Username"
                        value={username}
                        onChange={handlechange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handlechange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Mobile"
                        value={mobile}
                        onChange={handlechange}
                      />
                    </td>
                    <div className="button-section">
                      <td>
                        <button
                          className="adminedit"
                          onClick={() => handleSave(user._id)}
                        >
                          Save
                        </button>
                      </td>
                      <td>
                        <button
                          className="admindelete"
                          onClick={() => setEdit(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </div>
                  </>
                ) : (
                  <>
                    <td>{user?.username}</td>
                    <td>{user?.email}</td>
                    <td>{user?.mobile}</td>
                    <div className="button-section">
                      <td>
                        <button
                          className="adminedit"
                          onClick={() =>
                            handleEdit(
                              user._id,
                              user.username,
                              user.email,
                              user.mobile
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="admindelete"
                          onClick={() => hadleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </div>
                  </>
                )}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Admindash;
