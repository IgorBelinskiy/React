import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';




// const DialogsContainer = () => {

//    return (
//       <StoreContext.Consumer>
//          {
//             (store) => {
//                let state = store.getState().dialogsPage
//                let sendMessageClick = () => {
//                   store.dispatch(sendMessageActionCreator())
//                }
//                let onNewMessageChange = (body) => {
//                   store.dispatch(updateNewMessageBodyActionCreator(body))
//                }
//                return <Dialogs
//                   updateNewMessageBody={onNewMessageChange}
//                   sendMessage={sendMessageClick}
//                   dialogsPage={state} />
//             }

//          }

//       </StoreContext.Consumer>
//    )
// }

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyActionCreator(body))
      },
      sendMessage: () => {
         dispatch(sendMessageActionCreator())
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;