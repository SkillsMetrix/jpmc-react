import AddUser from "./AddUser";
import Footer from "./Footer";
import Header from "./Header";
import Users from "./Users";
import { Component } from "react";

export default class MainApp extends Component {

  //=============Lifecycle-----------

  componentDidMount(){
   
    const json=localStorage.getItem('jpmc')
    const userData= JSON.parse(json)
    if(userData){
      this.setState(()=>{
        return {
          userData
        }
      })
    }

  }
  componentDidUpdate(){
   const json= JSON.stringify(this.state.userData)
   localStorage.setItem('jpmc',json)
  }
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
