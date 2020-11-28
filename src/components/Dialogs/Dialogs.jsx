import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
            <div className={classes.dialog + ' ' + classes.active}>
               <NavLink to='/dialogs/1'>Igor</NavLink>
            </div>
            <div className={classes.dialog}>
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
            </div>
         </div>
         <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>How is your it-kamasutra</div>
            <div className={classes.message}>Yo</div>
         </div>
      </div>
   )
}

export default Dialogs;