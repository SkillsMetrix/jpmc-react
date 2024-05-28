import React from "react";

function NavBar(props) {
  return (
    <div className="container">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
