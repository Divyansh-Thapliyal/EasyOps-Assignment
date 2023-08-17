import React from 'react'
import  ReactDOM  from 'react-dom';

import BackDrop from './BackDrop';

// z-index: 100;
//     position: fixed;
//     top: 22vh;
//     left: 10%;
//     width: 80%;
//     background: white;
//     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
//     border-radius: 8px;

const ModalOverlay=(props)=>
{
    const content= <div className={` z-20 fixed w-1/2 border-2 border-black left-1/4 top-1/3 rounded-md bg-white ${props.className}`} style={props.style}>

         <header className={` mb-2 p-5  bg-red-600 ${props.headerClass}`}>
            <h2 className='text-2xl font-bold'>{props.header}</h2>
         </header>
         
         <body className={`text-cente ${props.bodyClass}`}>
            {props.children}
         </body>
         <hr className='m-5'></hr>
         <footer className={` m-5 text-center ${props.footerClass}`}>
            {props.footer}
         </footer>

     </div>
    
    return ReactDOM.createPortal(content,document.getElementById('modal-hook'));
}

const Modal = (props) => {
    
    return <>
    {props.show && <BackDrop onClick={props.onCancel}></BackDrop> }
    {props.show && <ModalOverlay {...props} ></ModalOverlay>}
   </>
}

export default Modal
