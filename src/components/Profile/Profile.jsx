import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
   return <div className={classes.content}>
      <div>
         <img src='https://zastavok.net/main/priroda/1423529702.jpg'></img>
      </div>
      <div>
         ava + description
   </div>
      <MyPosts/>
   </div>;
}

export default Profile;