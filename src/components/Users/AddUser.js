import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
        <label htmlFor="age">Età</label>
        <input type="number" id="age" />
        <button type="submit">Aggiungi</button>
      </form>
    </Card>
  );
};

export default AddUser;
