import React, { useState } from "react";

const UseForm = (intialState) => {
  const [value, setValue] = useState(intialState);
  return [
    value,
    (event) => {
      setValue({
        ...value,
        [event.target.name]: event.target.value,
      });
    },
  ];
};

export default UseForm;
