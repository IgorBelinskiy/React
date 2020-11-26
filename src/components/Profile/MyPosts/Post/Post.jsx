import React from 'react';
import classes from './Post.module.css';

const Post = () => {
   return (
      
            <div className={classes.item}>
               <img src='https://www.film.ru/sites/default/files/images/Neytiri.jpg'></img>
               post 1
               <div>
                  <span>like</span>
               </div>
            </div>
            
   )
}

export default Post;