import classes from "./addUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUsers = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error ,setError] = useState();
  const addUserHandelr = (event) => {
    event.preventDefault();
    if(enteredName.trim().lenght === 0 || enteredAge.trim().length === 0){
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
    

    props.onAddUser(enteredName, enteredAge)
    setEnteredName('');
    setEnteredAge('');
    
  };


  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandelr = ()=>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandelr}/>}
    <Card className={classes.input}>
      
      <form onSubmit={addUserHandelr}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            onChange={nameHandler}
            value={enteredName}
          />
          <label htmlFor="age">Age in Year</label>
          <input
            type="number"
            id="age"
            onChange={ageHandler}
            value={enteredAge}
          />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUsers;
