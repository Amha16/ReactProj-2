import AddUsers from "./componets/users/AddUsers";
import UserList from "./componets/users/UserList";
import { useState } from "react";
function App() {
  const [userLists, setUserList]= useState([]);
 const userHandler =(uName, uAge) =>{
  setUserList((prevList) => {
    return [...prevList, {name: uName,age: uAge ,id: Math.random().toString()} ];
  })
 }

  return (
    <div>
      <AddUsers onAddUser={userHandler}/>
      <UserList users={userLists}/>
    </div>
  );
}

export default App;
