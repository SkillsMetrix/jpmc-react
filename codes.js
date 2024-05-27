import AddUser from "./AddUser";
import Footer from "./Footer";
import Header from "./Header";
import Users from "./Users";
import { Component } from 'react'

export default class MainApp extends Component {

//==== initialize the state=====
  state={
      headerMessage : "welcome to header",
      userData : []
  }
      //=====================================Operation===========

      addUser=(data)=>{
        this.setState((prevState)=>{
          return{
          userData:prevState.userData.concat(data)
          }
        })
      }
  

  render() {
    
    return (
      <div>
        <Header hm={this.state.headerMessage} />
        <p>Welcome to MainApp</p>
        <Users ud={this.state.userData} />
        <AddUser  au={this.addUser}/>
        <Footer />
      </div>
    );
  }
}

----------

  


  function AddUser(props){

    const addUser=(e)=>{
      e.preventDefault();
      const inputData=e.target.elements.uname.value
        props.au(inputData)
    }
    return(
        <div>
            <p>User Add</p>
<form onSubmit={addUser}>
  UserName :<input type='text' name='uname'/>
<button >Add</button>
</form>
  
            
   
           
        </div>
    )
  }
  export default AddUser
