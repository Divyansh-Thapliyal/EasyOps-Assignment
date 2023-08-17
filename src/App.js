
import { BrowserRouter, Routes, Route,Redirect } from "react-router-dom";
import { useState } from "react";


import NavigationBar from "./components/NavigationBar";
import User from "./components/User/User";
import CustomerInfo from "./components/Customers/CustomerInfo";
import NewUser from "./components/User/NewUser";

let DUMMY_USERS=[
  {
      id:'u1',
      name:"Max",
      email:"Max007@gmail.com",
      phoneNo:"87994812xx"
  },
  {
      id:'u2',
      name:"Johnny",
      email:"Johny007@gmail.com",
      phoneNo:"87214812xx"
  }
  

];


function App() {


  const [dummyUsers,setDummyUsers]=useState(DUMMY_USERS);

   const addCustomer=(customer)=>
   {      
          console.log(customer);
          DUMMY_USERS.push(customer);
          setDummyUsers(DUMMY_USERS);
          console.log(dummyUsers);
   }

   const deleteCustomer=(id)=>
   {
       DUMMY_USERS=dummyUsers.filter((user)=>{return user.id!==id});
       setDummyUsers(DUMMY_USERS);
   }

   const updateCustomer=(id,details)=>
   {
       const user=DUMMY_USERS.find((user)=>{return user.id===id});

      //  console.log(DUMMY_USERS);
      console.log(details);
       user.name=details.name;
       user.email=details.email;
       user.phoneNo=details.phoneNo;

       
       setDummyUsers(DUMMY_USERS);
       console.log(dummyUsers);
       


   }
  return (<>
    
     
    <NavigationBar/>
     <Routes>
       <Route path="/user" element={<User DUMMY_USERS={dummyUsers}></User>}/> 
       <Route path="/:userId/customer" element={<CustomerInfo customers={dummyUsers} deleteCustomer={deleteCustomer} updateCustomer={updateCustomer}></CustomerInfo>}/>
       <Route path="/" element={<User DUMMY_USERS={dummyUsers}></User>}/>
       < Route path="/places/new" element={<NewUser addCustomer1={addCustomer} ></NewUser>}/>
       {/* an alternative to redirect */}
       <Route path="*" element={<User DUMMY_USERS={dummyUsers}></User>}/>  
     </Routes>

    </>
  );
}

export default App;
