const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';

let initialState = {
   users: [
      // { id: 1, fullName: 'Igor', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, status: 'I am a boss', location: { city: 'Kirovograd', country: 'Ukraine' } },
      // { id: 2, fullName: 'Katya', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: true, status: 'I am a boss too', location: { city: 'Minsk', country: 'Belarus' } },
      // { id: 3, fullName: 'Vanya', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } }
   ],

}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            // users: [...state.users],
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            // users: [...state.users],
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case TOGGLE_FOLLOW:
         return {
            ...state,
            // users: [...state.users],
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: !u.followed }
               }
               return u;
            })
         }
      case SET_USERS:
         return { ...state, users: [...state.users, ...action.users] }

      default:
         return state;
   }
}

export const followAC = (userId) => {
   return {
      type: FOLLOW, userId
   }
}

export const unfollowAC = (userId) => {
   return {
      type: UNFOLLOW, userId
   }
}
export const togglefAC = (userId) => {
   return {
      type: TOGGLE_FOLLOW, userId
   }
}
export const setUsersAC = (users) => {
   return {
      type: SET_USERS, users
   }
}

export default usersReducer;