const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   dialogs: [
      { id: 1, name: 'Igor' },
      { id: 2, name: 'Katya' },
      { id: 3, name: 'Vanya' },
      { id: 4, name: 'Roma' },
      { id: 5, name: 'Petsa' },
      { id: 6, name: 'Sanya' }
   ],
   messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your it-kamasutra' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo-Yo' }
   ],
   newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.newBody
         };

      case SEND_MESSAGE:
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 5, message: body } ]
         };

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