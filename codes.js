import React, { useState } from "react";

function UserApp(props) {
  const [users, setUsers] = useState([]);
  const [uname, setUname] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { uname }]);
    setUname("");
  };
  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.uname}>{user.uname}</div>
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
        <button>Add User</button>
      </form>
    </div>
  );
}

export default UserApp;
