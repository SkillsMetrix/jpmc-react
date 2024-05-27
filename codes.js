import AddUser from "./AddUser";
import Footer from "./Footer";
import Header from "./Header";
import Users from "./Users";
import { Component } from "react";

export default class MainApp extends Component {
  //==== initialize the state=====
  state = {
    headerMessage: "welcome to header",
    userData: [],
  };
  //=====================================Operation===========

  addUser = (data) => {
    this.setState((prevState) => {
      return {
        userData: prevState.userData.concat(data),
      };
    });
  };
  deleteAll = () => {
    this.setState(() => {
      return {
        userData: [],
      };
    });
  };

  deleteUser=(user)=>{
     this.setState((prevState)=>{
      return {
        userData:prevState.userData.filter((option) => user !== option)
      }
     })
  }
  render() {
    return (
      <div>
        <Header hm={this.state.headerMessage} />
        <p>Welcome to MainApp</p>
        <Users
          ud={this.state.userData}
          da={this.deleteAll}
          hasData={this.state.userData.length > 0}
          deleteUser={this.deleteUser}
        />
        <AddUser au={this.addUser} />
        <Footer />
      </div>
    );
  }
}




import Footer from "./Footer";
import Header from "./Header";
import User from "./User";

function Users(props) {
  return (
    <div>
      {props.ud.map((users) => (
        <User key={users} usr={users} dUser={props.deleteUser} />
      ))}
      <button disabled={!props.hasData} onClick={props.da}>
        delete all
      </button>
    </div>
  );
}
export default Users;




function User(props) {
  return (
    <div>
      <ul>
        <li> {props.usr}</li>
      </ul>
      <button onClick={() => props.dUser(props.usr)}>delete</button>
    </div>
  );
}
export default User;
