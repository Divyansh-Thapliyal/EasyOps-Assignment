import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
  return (
    <ul className='flex-col text-center '>
        {props.items.map((user)=>{return <UserItem key={user.id} id={user.id} name={user.name} email={user.email} phoneNo={user.phoneNo}></UserItem>})}
    </ul>
  )
}

export default UserList
