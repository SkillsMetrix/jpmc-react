import React, { createContext, useContext, useState } from "react";

const appContext=createContext()
const userData={id:101,name:'admin',email:'admin@mail.com',income:23456}
function ContextApiDemo(props) {
    const [emp,setEmp]= useState(userData)
  return (
    <div>
        <appContext.Provider value={emp}>
        <Employee />
        </appContext.Provider>
     
    </div>
  );
}

function Employee(props) {
    const empContext=useContext(appContext)
  return (
    <div>
        <p>Employee Name:{empContext.name}</p>
        <p>Employee id:{empContext.id}</p>
      <Salary />
    </div>
  );
}
function Salary(props) {
    const salaryContext= useContext(appContext)
  return (
    <div>
      <p>Salary : {salaryContext.income}</p>
    </div>
  );
}
export default ContextApiDemo;
