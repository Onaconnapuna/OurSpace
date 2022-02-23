import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import profilePostsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import friendshipReducer from "./friendships_reducer";
import notificationsReducer from "./notifications_reducer";
import mainPostsReducer from "./main_posts_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  profilePosts: profilePostsReducer,
  mainPosts: mainPostsReducer,
  comments: commentsReducer,
  friendships: friendshipReducer,
  notifications: notificationsReducer
});

export default entitiesReducer