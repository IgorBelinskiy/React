import * as axios from 'axios';
import classes from './users.module.css';
import React from 'react';
import userPhoto from '../../assets/img/user.png';

class Users extends React.Component {

   constructor(props) {
      super(props);
   }
   
   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   // getUsers = () => {
   //    if (this.props.users.length === 0) {
   //       axios.get('https://social-network.samuraijs.com/api/1.0/users')
   //          .then(response => {
   //             this.props.setUsers(response.data.items)
   //          })

   //       // props.setUsers(
   //       //    [
   //       //       { id: 1, followed: true, fullNmae: "Igor", status: 'I am a boss', location: { city: 'Kirovograd', country: 'Ukraine' }, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg' },
   //       //       { id: 2, followed: true, fullNmae: "Kateryna", status: 'I am a nails master', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg' },
   //       //       { id: 3, followed: false, fullNmae: "Vanya", status: 'I am a little boss', location: { city: 'Kirovograd', country: 'Ukraine' }, photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg' },
   //       //       { id: 4, followed: false, fullNmae: "Roman", status: 'I am a fireman', location: { city: 'Kirovograd', country: 'Ukraine' }, photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg' },
   //       //    ]
   //       // )
   //    }
   // }

   render() {
      return (
         <div className={classes.users}>
            {/* <button onClick={this.getUsers}>Get Users</button> */}
            {this.props.users.map(u => {
               return (
                  <div className={classes.user} key={u.id}>
                     <div className={classes.left}>
                        <div className={classes.user_img}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='ddd' />
                        </div>
                        {
                           u.followed
                              ? <button onClick={() => { this.props.unfollow(u.id) }}>UnFollow</button>
                              : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
}


export default Users;