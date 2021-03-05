const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', countLike: 15 },
      { id: 2, message: 'It\'s my first post', countLike: 20 },
      { id: 3, message: 'blala', countLike: 2 }
   ],
   newPostText: 'it-kamasutra',
   profile: null,
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            countLike: 0
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         };

      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         };

      }
      case SET_USERS_PROFILE: {
         return {
            ...state,
            profile: action.profile
         };

      }
      default:
         return state;
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

export const setUserProfile = (profile) => {
   return {
      type: SET_USERS_PROFILE, profile
   }
}

export default profileReducer;