import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, togglef, setCurrentPages, setTotalUserCount, toggleIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';



class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
            // this.props.setTotalUserCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPages(pageNumber);
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
         })
   }
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
         />
      </>
   }
}


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId))
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId))
//       },
//       toggfollow: (userId) => {
//          dispatch(togglefAC(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPagesAC(pageNumber))
//       },
//       setTotalUserCount: (totalCount) => {
//          dispatch(setTotalUserCountAC(totalCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching))
//       }
//    }

// }

export default connect(mapStateToProps, {
   follow,
   unfollow,
   togglef,
   setUsers,
   setCurrentPages,
   setTotalUserCount,
   toggleIsFetching,
})(UsersContainer);