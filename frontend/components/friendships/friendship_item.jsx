import React from 'react';
import { Link } from 'react-router-dom';

const FriendshipItem = (props) => {
  function redirect() {
    props.forceProfileRender();
  }
  return (
    <div className='friendship'>
        <Link className='friend-name' to={`/profiles/${props.friendship.userId}`} onClick={()=> props.fetchUser(props.friendship.userId).then(redirect())}>
      <div className='friend-id'>
        <img src={`${props.friendship.imageUrl}`} /> 
        <div> {props.friendship.firstName} </div> 
      </div>
        </Link>
      </div>
  )
}


export default FriendshipItem