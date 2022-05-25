import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModule';
const AddUser = function (props) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = function (event) {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'please enter a valid name and age',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'invalid input',
        message: 'please enter a valid age',
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge('');
    setEnteredName('');
  };

  const usernameChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = function () {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          errorHandler={errorHandler}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
