
import React from 'react';
import UserList from './UserList';


const User = (props) => {

  return (
    <UserList items={props.DUMMY_USERS} ></UserList>
  )
}

export default User
