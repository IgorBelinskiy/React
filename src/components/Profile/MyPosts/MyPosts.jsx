import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

   let postData = [
      { id: 1, message: 'Hi, how are you?', countLike: 15 },
      { id: 2, message: 'It\'s my first post', countLike: 20 },

   ]
   return (
      <div className={classes.postsBlock}>
         <h2>My posts</h2>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={classes.posts}>

            <Post message={postData[0].message} countLike={postData[0].countLike} />
            <Post message={postData[1].message} countLike={postData[1].countLike} />

         </div>
      </div>
   )
}

export default MyPosts;