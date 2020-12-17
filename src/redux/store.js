import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hi, how are you?', countLike: 15 },
            { id: 2, message: 'It\'s my first post', countLike: 20 },
            { id: 3, message: 'blala', countLike: 2 }
         ],
         newPostText: 'it-kamasutra'
      },

      dialogsPage: {

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
      },
      sidebar: {}
   },
   _callsubscriber() {
      console.log('State changed');
   },

   getState() {
      debugger;
      return this._state;
   },
   subscribe(observer) {
      this._callsubscriber = observer;
   },


   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callsubscriber(this._state);

      // if (action.type === ADD_POST) {
      //    debugger;
      //    let newPost = {
      //       id: 5,
      //       message: this._state.profilePage.newPostText,
      //       countLike: 0
      //    };
      //    this._state.profilePage.posts.push(newPost);
      //    this._state.profilePage.newPostText = '';
      //    this._callsubscriber(this._state);
      // } else if (action.type === UPDATE_NEW_POST_TEXT) {
      //    this._state.profilePage.newPostText = action.newText;
      //    this._callsubscriber(this._state);
      // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      //    this._state.dialogsPage.newMessageBody = action.newBody;
      //    this._callsubscriber(this._state);
      // } else if (action.type === SEND_MESSAGE) {
      //    let body = this._state.dialogsPage.newMessageBody;
      //    this._state.dialogsPage.newMessageBody = '';
      //    this._state.dialogsPage.messages.push({ id: 5, message: body })
      //    this._callsubscriber(this._state);
      // }
   }
}









export default store;