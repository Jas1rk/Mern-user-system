import React, { useEffect, useState } from "react";
import { AdminNavbar, AdminSearch } from "../..";
import { getUsers } from "../../../Redux/Admin/adminThunk";
import { useDispatch, useSelector } from "react-redux";
import "./Admindash.css";

const Admindash = () => {
  const [isEdit, setEdit] = useState(false);
  const userData = useSelector((state) => state.admin.filterusers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    console.log("here is users", userData);
  }, []);

  return (
    <>
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
          {userData.map((user, index) => (
            <tbody key={index}>
              <tr className="list">
                {isEdit ? (
                  <>
                    <td>
                      <input type="text" name="" id="" placeholder="Username" />
                    </td>
                    <td>
                      <input type="email" name="" placeholder="Email" />
                    </td>
                    <td>
                      <input type="number" name="" placeholder="Mobile" />
                    </td>
                    <div className="button-section">
                      <td>
                        <button
                          className="adminedit"
                          onClick={() => setEdit(true)}
                        >
                          Save
                        </button>
                      </td>
                      <td>
                        <button
                          className="admindelete"
                          onClick={() => setEdit(false)}
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
                    <td className="td-mobile">{user?.mobile}</td>
                    <div className="button-section">
                      <td>
                        <button
                          className="adminedit"
                          onClick={() => setEdit(true)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button className="admindelete">Delete</button>
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
