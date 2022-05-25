import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  const clearList = function () {
    setUsersList([]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length !== 0 && (
        <UsersList clearList={clearList} users={usersList} />
      )}
    </div>
  );
}

export default App;
