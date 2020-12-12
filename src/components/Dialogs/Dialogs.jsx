import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

   let state = props.store.getState().dialogsPage

   let dialogsElements =
      state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
   let messagesElements =
      state.messages.map(m => <Message message={m.message} />)
   let newMessageBody = state.newMessageBody;

   // let newMessageElement = React.createRef();
   let sendMessage = () => {
      props.store.dispatch(sendMessageActionCreator())
   }
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyActionCreator(body))
   }


   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>

            {dialogsElements}


         </div>
         <div className={classes.messages}>
            {messagesElements}
            <div>
               <textarea
                  value={newMessageBody}
                  onChange={onNewMessageChange}
                  // ref={newMessageElement}
                  placeholder='Enter your message'>
               </textarea>
            </div>
            <button onClick={sendMessage}> SEND </button>
         </div>
      </div>
   )
}

export default Dialogs;