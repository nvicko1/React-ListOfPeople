import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css';
import Button from '../UI/Button';
import button from '../UI/Button.module.css';

const UsersList = props => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
      <Button onClick={props.clearList}>Clear</Button>
    </Card>
  );
};

export default UsersList;
