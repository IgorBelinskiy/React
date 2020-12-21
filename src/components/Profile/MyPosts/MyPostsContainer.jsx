import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
   debugger;
   // let state = props.store.getState();


   return (
      <StoreContext.Consumer>
         {
            (store) => {
               let addPost = () => {
                  store.dispatch(addPostActionCreator());
               }

               let onPostChange = (text) => {
                  let action = updateNewPostTextActionCreator(text);
                  store.dispatch(action);
               }
               let state = store.getState();
               return <MyPosts updateNewPostText={onPostChange}
                  addPost={addPost} posts={state.profilePage.posts}
                  newPostText={state.profilePage.newPostText} />
            }
         }
      </StoreContext.Consumer>
   )
}

export default MyPostsContainer;