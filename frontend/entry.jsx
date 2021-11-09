import React from "react";
import ReactDOM from "react-dom";
import { fetchPosts } from "./actions/post_actions";
import Root from './components/root'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () =>{
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser},
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchPosts = fetchPosts

  let preloadedState = undefined;
  if (window.currentUser) {
      preloadedState = {
          session: {
              currentUser: window.currentUser
          }
      }
    }
  // const store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)

  window.store = store
})