import classes from "./addUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";


const AddUsers = (props) => {
  

  const enterdNameRef = useRef();
  const enteredAgeRef =useRef();

  const [error ,setError] = useState();
  const addUserHandelr = (event) => {


    const enterdName = enterdNameRef.current.value;
    const enteredAge = enteredAgeRef.current.value;

  

    event.preventDefault();
    if(enterdName.trim().lenght === 0 || enteredAge.trim().length === 0){
     setError({
      title: 'Invalid input',
      message: 'Pleade enter a valid name and age'
    });
    return;
    }

    if(+enteredAge < 1){
      setError({
        title: 'Invalid Age',
        message: 'Pleade enter a valid age in number > 1'
      });
      return;
    }
    

    props.onAddUser(enterdName, enteredAge)
  enterdNameRef.current.value = '';
  enteredAgeRef.current.value = '';
    
  };




  const errorHandelr = ()=>{
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandelr}/>}
    <Card className={classes.input}>
      
      <form onSubmit={addUserHandelr}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
          
            ref={enterdNameRef}
          />
          <label htmlFor="age">Age in Year</label>
          <input
            type="number"
            id="age"
           
            ref={enteredAgeRef}
          />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUsers;
