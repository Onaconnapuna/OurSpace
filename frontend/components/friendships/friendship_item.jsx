import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const FriendshipItem = (props) => {
  let history = useHistory();
  function redirect() {
    // history.push(`profiles/${props.friendship.userId}`)
    props.forceProfileRender();
  }
  return (
    <div className='friendship'>
      <div className='friend-id'>
      <img src={`${props.friendship.imageUrl}`} />
      <div className='friend-name'>
        <button onClick={() => redirect()}>Try Me</button>
        <Link to={`/profiles/${props.friendship.userId}`} onClick={()=> props.fetchUser(props.friendship.userId).then(redirect())}>{props.friendship.firstName} {props.friendship.lastName}</Link>
      </div>
      </div>
    </div>
  )
}


export default FriendshipItem