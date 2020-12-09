import React from 'react';
import MyPosts from './MyPosts/MyPosts';
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
      <MyPosts
         posts={props.profilePage.posts}
         newPostText={props.profilePage.newPostText}
         dispatch={props.dispatch} />
   </div>;
}

export default Profile;