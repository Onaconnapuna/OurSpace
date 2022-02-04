import React from 'react';
import { Link } from 'react-router-dom';

const FriendshipItem = (props) => {
  return (
    <div className='friendship'>
      <div className='friend-id'>
      <img src={`${props.friendship.imageUrl}`} />
      <div className='friend-name'>
        <Link to={`/profiles/${props.friendship.userId}`}>{props.friendship.firstName} {props.friendship.lastName}</Link>
      </div>
      </div>
    </div>
  )
}


export default FriendshipItem