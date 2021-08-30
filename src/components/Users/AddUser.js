import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().lenght === 0 || enteredAge.length === 0) {
      return;
    }

    if (enteredAge < 1 || enteredAge.toString().length > 2) {
      return;
    }
    console.log(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const nameChangerHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangerHandler = (event) => {
    setEnteredAge(+event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangerHandler}
        />
        <label htmlFor="age">Età</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangerHandler}
        />
        <Button type="submit">Aggiungi</Button>
      </form>
    </Card>
  );
};

export default AddUser;
