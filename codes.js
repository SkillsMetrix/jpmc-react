import React, { useEffect, useState } from "react";

function UserAppNew(props) {
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };
  const deleteUser = (user) => {
    setUsers(users.filter((us) => us.uname !== user));
  };
  useEffect(() => {
    localStorage.setItem("jpmc", JSON.stringify(users));
  }, [users]);
  return (
    <div>
     
      <hr />
      <form onSubmit={handleSubmit}>
        UserName:
        <input type="text" name="uname" onChange={handleChange} />
        Email:
        <input type="text" name="email" onChange={handleChange} />
        <button>Add User</button>
      </form>
    </div>
  );
}

export default UserAppNew;
