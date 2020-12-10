const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
         ]
      }
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

   // addPost() {
   //    let newPost = {
   //       id: 5,
   //       message: this._state.profilePage.newPostText,
   //       countLike: 0
   //    };
   //    this._state.profilePage.posts.push(newPost);
   //    this._state.profilePage.newPostText = '';
   //    this._callsubscriber(this._state);
   // },
   // updateNewPostText(newText) {
   //    this._state.profilePage.newPostText = newText;
   //    this._callsubscriber(this._state);
   // },

   dispatch(action) {
      if (action.type === ADD_POST) {
         debugger;
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            countLike: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callsubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callsubscriber(this._state);
      }
   }
}

export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT, newText: text
   }
}





export default store;