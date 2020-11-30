import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
   let path = '/dialogs/' + props.id;

   return (
      <div className={classes.dialog + ' ' + classes.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className={classes.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {
   let dialogs = [
      { id: 1, name: 'Igor' },
      { id: 2, name: 'Katya' },
      { id: 3, name: 'Vanya' },
      { id: 4, name: 'Roma' },
      { id: 5, name: 'Petsa' },
      { id: 6, name: 'Sanya' }
   ]
   let messages = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your it-kamasutra' },
      { id: 3, message: 'Yo' }
   ]

   let dialogsElements = dialogs
      .map(d => <DialogItem name={d.name} id={d.id} />)
   
   let messagesElements = messages
      .map(m => <Message message={m.message} />)

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>

            {dialogsElements}


         </div>
         <div className={classes.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;