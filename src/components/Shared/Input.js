import React from 'react'
import { useReducer } from 'react';
import { validate } from './Validator';
import { useEffect } from 'react';


const inputReducer=(state,action)=>
{

    if(action.type==='CHANGE')
    {
      
       return {
         ...state,
         value:action.val,
          isValid:validate(action.val,action.validators)
        
       }
    }
    return state;

}
const Input = (props) => {
  

    const [inputState,dispatch]=useReducer(inputReducer,{value:'',isValid:false});

    const changeHandler=(event)=>
    {    
           
         dispatch({type:'CHANGE',val:event.target.value,validators:props.validators});
    }

    useEffect(()=>{props.onInput(props.id,inputState.value,inputState.isValid)},[inputState]);
   
  const element=props.element==='input'?<input  className='border-2 border-black rounded-sm flex w-full' id={props.id} type={props.type} placeholder={props.placeholder} value={inputState.value} onInput={changeHandler}/>:<textarea className='border-2 border-black rounded-sm flex w-full' id={props.id} rows={props.rows||3} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} />



return <>
 <div className='flex-col'>
    <label className='font-bold' htmlFor={props.id}>{props.label}</label>
    {element}
 </div>
</>




}

export default Input
