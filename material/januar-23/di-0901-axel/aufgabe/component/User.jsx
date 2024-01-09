import React from "react";

const User = ({ name, age, status }) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Status: {status}</p>
    <hr />
  </div>
);

export default User;
