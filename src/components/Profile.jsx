import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
   return <div className={classes.content}>
      <div>
         <img src='https://zastavok.net/main/priroda/1423529702.jpg'></img>
      </div>
      <div>
         ava + description
   </div>
      <div>
         My posts
     <div>
            New post
     </div>
         <div className={classes.posts}>
            <div className={classes.item}>
               post 1
            </div>
            <div className={classes.item}>
               post 2
            </div>
         </div>
      </div>
   </div>;
}

export default Profile;