import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';


const FriendshipItem = (props) => {
  function redirect() {
    props.forceProfileRender();
  }

  const handleClickOutside = (event) => {
    if (
      container.current &&
      !container.current.contains(event.target)
    ) {
      setDropDown(false)
    }
  };

  const container = useRef();
  const [dropDown, setDropDown] = useState(false)

  const handleDropdown = (dropDown) => {
    if (dropDown) {
      setDropDown(false)
    } else {
      setDropDown(true)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const checkRecommeded = (props) => {
    if (props.recommendedFriends === true) {
      return (
        <div className="dropdown-post">
          <Link className="dropdown-item" to={`/profiles/${props.friendship.userId}`}> Visit Profile</Link>
        </div>
      )
    } else {
      return (
        <div className="dropdown-post">
          <button className="dropdown-item" onClick={() => handleDeleteFriend(props.friendship.id)}>Remove Friend</button>
          <Link className="dropdown-item" to={`/profiles/${props.friendship.userId}`}> Visit Profile</Link>
        </div>
      )
    }
  }

  const handleDeleteFriend = (friendshipId) => {
    props.deleteFriendship(friendshipId); 
    redirect();
  }

  const toggleRemove = () => {
    if (props.flag) {
      return (
        <div className="ellipsis-button-background-nav" ref={container}>
          <button className='ellipsis-button' onClick={() => handleDropdown()}> &#8230; </button>
          {dropDown && checkRecommeded(props)}
          </div>
      )
    }
  }

  return (
    <div className='friendship'>
        <Link className='friend-name' to={`/profiles/${props.friendship.userId}`} onClick={()=> props.fetchUser(props.friendship.userId).then(redirect())}>
      <div className='friend-id'>
        <img src={`${props.friendship.imageUrl}`} /> 
        <div> {props.friendship.firstName} </div> 
      </div>
        </Link>
        {toggleRemove()}
      </div>
  )
}


export default FriendshipItem