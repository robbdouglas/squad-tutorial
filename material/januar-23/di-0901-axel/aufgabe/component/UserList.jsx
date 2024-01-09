import React, { useState } from "react";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([
    { name: "John Doe", age: 25, status: "active" },
    { name: "Jane Doe", age: 30, status: "inactive" },
  ]);

  const addUser = (name, age, status) => {
    const newUser = { name, age, status };
    setUsers([...users, newUser]);
  };

  const toggleStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].status =
      updatedUsers[index].status === "active" ? "inactive" : "active";
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map((user, index) => (
        <User
          key={index}
          name={user.name}
          age={user.age}
          status={user.status}
        />
      ))}
      <button onClick={() => addUser("New User", 22, "active")}>
        Add User
      </button>
      <button onClick={() => toggleStatus(0)}>Toggle Status</button>
    </div>
  );
};

export default UserList;
