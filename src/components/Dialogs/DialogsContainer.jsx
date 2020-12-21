import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';




const DialogsContainer = () => {

   return (
      <StoreContext.Consumer>
         {
            (store) => {
               let state = store.getState().dialogsPage
               let sendMessageClick = () => {
                  store.dispatch(sendMessageActionCreator())
               }
               let onNewMessageChange = (body) => {
                  store.dispatch(updateNewMessageBodyActionCreator(body))
               }
               return <Dialogs
                  updateNewMessageBody={onNewMessageChange}
                  sendMessage={sendMessageClick}
                  dialogsPage={state} />
            }

         }

      </StoreContext.Consumer>
   )
}

export default DialogsContainer;