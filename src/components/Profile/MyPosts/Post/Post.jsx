import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
   debugger;
   return (

      <div className={classes.item}>
         <img src='https://www.film.ru/sites/default/files/images/Neytiri.jpg'></img>
         { props.message}
         <div>
            <span>like - {props.countLike}</span>
         </div>
      </div>

   )
}

export default Post;