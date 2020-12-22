import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

   let state = props.dialogsPage

   let dialogsElements =
      state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
   let messagesElements =
      state.messages.map(m => <Message message={m.message} key={m.id} />)
   let newMessageBody = state.newMessageBody;

   // let newMessageElement = React.createRef();
   let sendMessage = () => {
      props.sendMessage();
   }
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body)
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