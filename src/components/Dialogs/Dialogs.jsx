import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

   let dialogsElements = 
      props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
   
   let messagesElements = 
      props.state.messages.map(m => <Message message={m.message} />)

   let newMessageElement = React.createRef();
   let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text)
   }

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
            
            {dialogsElements}


         </div>
         <div className={classes.messages}>
            {messagesElements}
            <div><textarea ref={newMessageElement}></textarea></div>
            <button onClick={ addMessage }> Add </button>
         </div>
      </div>
   )
}

export default Dialogs;