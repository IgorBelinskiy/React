import React from 'react';
import userPhoto from '../../assets/img/user.png';
import classes from './users.module.css';

const Users = (props) => {

   let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return (
      <div className={classes.users}>
         {
            pages.map(p => {
               return <span className={props.currentPage === p ? classes.selected : ''}
                  onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })
         }

         {/* <button onClick={this.getUsers}>Get Users</button> */}
         {props.users.map(u => {
            return (
               <div className={classes.user} key={u.id}>
                  <div className={classes.left}>
                     <div className={classes.user_img}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='ddd' />
                     </div>
                     {
                        u.followed
                           ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                           : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                     }

                     {/* Через toggle */}
                     {/* {
                           u.followed
                              ? <button onClick={() => { props.toggfollow(u.id) }}>Follow</button>
                              : <button onClick={() => { props.toggfollow(u.id) }}>unFollow</button>
                        } */}
                  </div>
                  <div className={classes.right}>
                     <div className={classes.righr_l}>
                        <div className={classes.user_name}>{u.name}</div>
                        <div className={classes.user_status}>{u.status}</div>
                     </div>
                     <div className={classes.righr_r}>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                     </div>
                  </div>
               </div>)
         })}
      </div>
   )
}


export default Users;