import AddUser from "./AddUser"
import Footer from "./Footer"
import Header from "./Header"
import Users from "./Users"


  function MainApp(){
    const headerMessage='welcome to header'
    const userData=['admin','manager','qa']
    return(
  
        <div>
            <Header hm={headerMessage}/>
            <p>Welcome to MainApp</p>
            <Users ud={userData}/>
            <AddUser/>
            <Footer/>
        </div>
    )
  }
  export default MainApp



import Footer from "./Footer"
import Header from "./Header"


  function AddUser(){

    const addUser=()=>{
      alert('user is added')
    }
    return(
        <div>
            <p>User Add</p>
<form>
<button onClick={addUser}>Add</button>
</form>
  
            
   
           
        </div>
    )
  }
  export default AddUser
