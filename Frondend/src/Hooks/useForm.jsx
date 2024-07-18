import React, { useState } from "react";

const UseForm = (intialState) => {
  const [value, setValues] = useState(intialState);
  
  return [
    value,
    (event) => {
      setValues({
        ...value,
        [event.target.name]: event.target.value,
      });
    },
  ];
};

export default UseForm;
