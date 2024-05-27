import AddUser from "./AddUser";
import Footer from "./Footer";
import Header from "./Header";
import Users from "./Users";
import { Component } from 'react'

export default class MainApp extends Component {
  render() {
    const headerMessage = "welcome to header";
    const userData = ["admin", "manager", "qa"];
    return (
      <div>
        <Header hm={headerMessage} />
        <p>Welcome to MainApp</p>
        <Users ud={userData} />
        <AddUser />
        <Footer />
      </div>
    );
  }
}

----------

  import Footer from "./Footer"
import Header from "./Header"
import User from "./User"


  function Users(props){

    return(
        <div>
            
           {
            props.ud.map((users) =>  <User usr={users}/> )
           }
          
            
        </div>
    )
  }
  export default Users



-------

  

  function User(props){

    return(
        <div>
            
          <ul>
            <li> {props.usr}</li>
          </ul>
          
           
        </div>
    )
  }
  export default User
