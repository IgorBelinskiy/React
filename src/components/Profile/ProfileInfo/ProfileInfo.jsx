import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <div>
            <img src='https://zastavok.net/main/priroda/1423529702.jpg'></img>
         </div>
         <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} alt="ff" />
            <div className={classes.info}>
               <div>{props.profile.aboutMe}</div>
               <div>{props.profile.contacts.instagram}</div>
               <div>{props.profile.lookingForAJob}</div>
               <div>{props.profile.lookingForAJobDescription}</div>
               <div>{props.profile.fullName}</div>
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo;