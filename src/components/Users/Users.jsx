import React from 'react';
import classes from './users.module.css';

const Users = (props) => {
   if (props.users.length === 0) {
      props.setUsers(
         [
            { id: 1, fullName: 'Igor', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, status: 'I am a boss', location: { city: 'Kirovograd', country: 'Ukraine' } },
            { id: 2, fullName: 'Katya', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: true, status: 'I am a boss too', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 3, fullName: 'Vanya', photoUrl: 'https://vokrug-tv.ru/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } }
         ]
      )
   }
   return (
      <div>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img src={u.photoUrl} className={classes.photo} alt="" />
                  </div>
                  <div>
                     {
                        u.followed
                           ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                           : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                     }

                  </div>
               </span>
               <span>
                  <span>
                     <div>{u.fullName}</div>
                     <div>{u.status}</div>
                  </span>
                  <span>
                     <div>{u.location.city}</div>
                     <div>{u.location.country}</div>
                  </span>
               </span>
            </div>)
         }
      </div>
   )
}

export default Users;