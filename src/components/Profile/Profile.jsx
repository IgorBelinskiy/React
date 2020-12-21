import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

   // let posts = [
   //    { id: 1, message: 'Hi, how are you?', countLike: 15 },
   //    { id: 2, message: 'It\'s my first post', countLike: 20 },
   //    { id: 3, message: 'blala', countLike: 2 }
   // ]

   return <div className={classes.content}>
      <ProfileInfo />
      <MyPostsContainer
         store={props.store} />
   </div>;
}

export default Profile;