import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(users);
    localStorage.setItem("udata", data);
    navigate("/");
  };

  return (
    <div className="input-group-mb-3">
      <form onSubmit={handleSubmit}>
        UserName:
        <input type="text" name="uname" onChange={handleChange} />
        Email:
        <input type="text" name="email" onChange={handleChange} />
        Password:
        <input type="password" name="password" onChange={handleChange} />
        City:
        <input type="text" name="city" onChange={handleChange} />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
