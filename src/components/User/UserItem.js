import React from 'react'
import {Link} from 'react-router-dom';

const UserItem = (props) => {
  return (
    <li className='bg-yellow-200 flex-col text-center w-80 m-2  p-3 rounded-lg ml-auto mr-auto'>
        <Link to={`/${props.id}/customer`}>
       <h2>{props.name}</h2>
       <h4> {props.email}</h4>
       <h3> {props.phoneNo}</h3>
       </Link>
    </li>
  )
}

export default UserItem
