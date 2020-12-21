import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

   let state = props.store.getState().dialogsPage

   let sendMessageClick = () => {
      props.store.dispatch(sendMessageActionCreator())
   }
   let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyActionCreator(body))
   }


   return (
      <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={sendMessageClick} dialogsPage={state} />
   )
}

export default DialogsContainer;