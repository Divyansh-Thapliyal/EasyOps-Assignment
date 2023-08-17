import React from 'react';
import  ReactDOM  from 'react-dom';

const BackDrop = (props) => {
  

    return ReactDOM.createPortal(<div onClick={props.onClick} className='w-full h-full bg-gray-600 z-10 fixed opacity-50'></div>,document.getElementById('backdrop-hook'));
}

export default BackDrop
