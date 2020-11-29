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
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>

            <DialogItem id='1' name='Igor' />
            <DialogItem id='2' name='Katya' />
            <DialogItem id='3' name='Vanya' />
            <DialogItem id='4' name='Roma' />
            <DialogItem id='5' name='Petsa' />
            <DialogItem id='6' name='Sanya' />

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
            <Message message='Hi' />
            <Message message='How is your it-kamasutra' />
            <Message message='Yo' />
         </div>
      </div>
   )
}

export default Dialogs;