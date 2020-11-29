import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src='https://zastavok.net/main/priroda/1423529702.jpg'></img>
         </div>
         <div className={classes.descriptionBlock}>
            ava + description
         </div>
      </div>
   )
}

export default ProfileInfo;