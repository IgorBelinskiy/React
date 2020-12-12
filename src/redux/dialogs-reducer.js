const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.newBody;
         return state;
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messages.push({ id: 5, message: body })
         return state;
      default:
         return state;
   }
}
export const sendMessageActionCreator = () => {
   return {
      type: SEND_MESSAGE
   }
}

export const updateNewMessageBodyActionCreator = (body) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY, newBody: body
   }
}

export default dialogsReducer;