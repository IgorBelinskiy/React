import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {



   let postsElements =
      props.posts.map(p => <Post message={p.message} countLike={p.countLike} />);

   let newPostElement = React.createRef();
   let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = ''; // оставить пустую строку
   }

   return (
      <div className={classes.postsBlock}>
         <h2>My posts</h2>
         <div>
            <div>
               <textarea ref={ newPostElement }></textarea>
            </div>
            <div>
               <button onClick={ addPost }>Add post</button>
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