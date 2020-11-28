import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
            <div className={classes.dialog + ' ' + classes.active}>
               Igor
            </div>
            <div className={classes.dialog}>
               Katya
            </div>
            <div className={classes.dialog}>
               Ivan
            </div>
            <div className={classes.dialog}>
               Roma
            </div>
            <div className={classes.dialog}>
               Petsa
            </div>
            <div className={classes.dialog}>
               Sanya
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