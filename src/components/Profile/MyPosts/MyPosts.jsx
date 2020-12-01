import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   // let posts = [
   //    { id: 1, message: 'Hi, how are you?', countLike: 15 },
   //    { id: 2, message: 'It\'s my first post', countLike: 20 },
   //    { id: 3, message: 'blala', countLike: 2 }
   // ]

   let postsElements =
      props.posts.map(p => <Post message={p.message} countLike={p.countLike} />);

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

            {postsElements}

            {/* <Post message={postData[0].message} countLike={postData[0].countLike} />
            <Post message={postData[1].message} countLike={postData[1].countLike} /> */}

         </div>
      </div>
   )
}

export default MyPosts;