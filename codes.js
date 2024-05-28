import React, { useState } from "react";

function UserApp(props) {
  const [users, setUsers] = useState([]);
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { uname,email }]);
    setUname("");
  };
  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.uname}>{user.uname}---{user.email}</div>
        ))}
      </div>
      <hr />
      <form onSubmit={addUser}>
        UserName:
        <input
          type="text"
          name="uname"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
         Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add User</button>
      </form>
    </div>
  );
}

export default UserApp;
