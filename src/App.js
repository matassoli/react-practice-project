import React, { useState } from "react";

import ErrorModal from "./components/UI/ErrorModal";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserLIst";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
      <ErrorModal title="C'è un errore dp" message="Qualcosa è andato stò" />
    </div>
  );
}

export default App;
