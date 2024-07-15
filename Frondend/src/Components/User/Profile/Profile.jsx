import React, { useEffect, useState } from "react";
import { Header, ImageUpload } from "../..";
import { useDispatch, useSelector } from "react-redux";
import UseForm from "../../../Hooks/useForm";
import { editProfile } from "../../../Redux/User/userThunk";
import toast, { Toaster } from "react-hot-toast";
import "./Profile.css";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [formValue, handleInput] = UseForm({
    username: "",
    email: "",
    mobile: "",
  });
  const { username, email, mobile } = formValue;
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsEdit(false);
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("userID", userData._id);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("mobile", mobile);
    if (image) {
      formData.append("image", image);
    }
    dispatch(editProfile(formData, username, email, mobile, image, toast));
    console.log("here is formdata", formData);
  };

  return (
    <>
      <Toaster />
      <Header />
      <div className="container">
        <div className="profileContainer">
          {isEdit ? (
            <form className="editForm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInput}
              />
              <input
                type="number"
                name="mobile"
                placeholder="Mobile"
                value={mobile}
                onChange={handleInput}
              />
              <br />
              <br />
              <div className="imageContaier">
                {image && (
                  <div className="discard" onClick={() => setImage(null)}>
                    ×
                  </div>
                )}
                <img
                  src={image ? URL.createObjectURL(image) : ""}
                  alt="Profile"
                  width="100px"
                  height="100px"
                  className="image"
                />
              </div>
              <ImageUpload />

              <input
                className="input"
                name="image"
                id="file"
                type="file"
                onChange={(event) => setImage(event.target.files[0])}
              />
              <div className="editform-buttons">
                <button className="save-btn">Save</button>
                <button className="cancel-btn" onClick={() => setIsEdit(false)}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <img src="" alt="Profile" className="profileImage" />
              <h3>Username : {userData.username}</h3>
              <h3>Email : {userData.email}</h3>
              <h3>Mobile : {userData.mobile}</h3>
              <button onClick={() => setIsEdit(true)}>Edit</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
