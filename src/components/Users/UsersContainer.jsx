import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, togglefAC, setCurrentPagesAC, setTotalUserCountAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      toggfollow: (userId) => {
         dispatch(togglefAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPagesAC(pageNumber))
      },
      setTotalUserCount: (totalCount) => {
         dispatch(setTotalUserCountAC(totalCount))
      }
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);