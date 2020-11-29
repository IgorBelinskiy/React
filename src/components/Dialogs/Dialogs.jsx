import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
   let path = '/dialogs' + props.id;

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
   let dialogsData = [
      {id: 1, name: 'Igor'},
      {id: 2, name: 'Katya'},
      {id: 3, name: 'Vanya'},
      {id: 4, name: 'Roma'},
      {id: 5, name: 'Petsa'},
      {id: 6, name: 'Sanya'}
   ]

   let messagesData = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra'},
      {id: 3, message: 'Yo'}
   ]
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>

            <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
            <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
            <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
            <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
            <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
            <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />

            {/* <div className={classes.dialog}>
               <NavLink to='/dialogs/2'>Katya</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/3'>Vanya</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/4'>Roma</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/5'>Petsa</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/6'>Sanya</NavLink>
            </div> */}
         </div>
         <div className={classes.messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message} />
            <Message message={messagesData[2].message} />
         </div>
      </div>
   )
}

export default Dialogs;