import React from 'react';
import Button from './Button';
import classes from './ErrorModule.module.css';
import Card from './Card';
const ErrorModal = function (props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.errorHandler}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.errorHandler}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
