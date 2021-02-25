const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
   users: [
      // { id: 1, fullName: 'Igor', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, status: 'I am a boss', location: { city: 'Kirovograd', country: 'Ukraine' } },
      // { id: 2, fullName: 'Katya', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: true, status: 'I am a boss too', location: { city: 'Minsk', country: 'Belarus' } },
      // { id: 3, fullName: 'Vanya', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } }
   ],
   pageSize: 10,
   totalUserCount: 300,
   currentPage: 1,
   isFetching: true,
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
         return {
            ...state,
            users: action.users
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }
      case SET_TOTAL_USER_COUNT:
         return {
            ...state,
            totalUserCount: action.count
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }

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
      type: SET_USERS, users: users
   }
}
export const setCurrentPagesAC = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE, currentPage: currentPage
   }
}

export const setTotalUserCountAC = (totalUserCount) => {
   return {
      type: SET_TOTAL_USER_COUNT, count: totalUserCount
   }
}

export const toggleIsFetchingAC = (isFetching) => {
   return {
      type: TOGGLE_IS_FETCHING, isFetching
   }
}
export default usersReducer;