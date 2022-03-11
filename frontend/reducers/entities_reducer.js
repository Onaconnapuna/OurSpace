import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import profilePostsReducer from "./posts_reducer";
import friendshipReducer from "./friendships_reducer";
import notificationsReducer from "./notifications_reducer";
import mainPostsReducer from "./main_posts_reducer";
import recommendedFriendsReducer from "./recommended_friends";
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  comments: commentsReducer,
  users: usersReducer,
  profilePosts: profilePostsReducer,
  mainPosts: mainPostsReducer,
  friendships: friendshipReducer,
  recommendedFriends: recommendedFriendsReducer,
  notifications: notificationsReducer
});

export default entitiesReducer