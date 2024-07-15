import React, { useState } from "react";
import { searchUser } from "../../../Redux/Admin/adminSlice";
import "./Adminsearch.css";
import { useDispatch, useSelector } from "react-redux";
import { CancelIcon } from "../..";

const Adminsearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const filterUsers = useSelector((state) => state.admin.filterusers);

  const handleChange = (event) => {
    setSearch(event.target.value);
    dispatch(searchUser(event.target.value.trim()));
  };
  const cancelSearch = () => {
    setSearch("");
    dispatch(searchUser(""));
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search"
          placeholder="Search user"
          value={search}
          onChange={(event) => handleChange(event)}
        />
        {search.length !== 0 && (
          <div className="cancel-icon" onClick={cancelSearch}>
            <CancelIcon />
          </div>
        )}
      </div>
      {search.length !== 0 && (
        <div className="search-results">
          {filterUsers.length > 0 ? (
            <div>{filterUsers[0]?.username}</div>
          ) : (
            <div>No results</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Adminsearch;
