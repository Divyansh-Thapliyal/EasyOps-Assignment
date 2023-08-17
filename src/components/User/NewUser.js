import React from 'react'
import { validate,VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../Shared/Validator'
import Input from '../Shared/Input';

import { useReducer } from 'react';

const formReducer=(state,action)=>
{
   if(action.type==='CHECK')
   {

    let isValid1=true;

    for(const id in state.inputs)
    {
         if(id===action.id)
         {
          isValid1=isValid1&&action.isValid;
         }
         else isValid1=isValid1&&state.inputs[id].isValid;
    }
      
    return{
      ...state,
      inputs:{
        ...state.inputs,
        [action.id]:{value:action.value,isValid:action.isValid}
      },
      isValid:isValid1
    }

   }
   return state;
}

const NewUser = (props) => {

  const [formState,dispatch]=useReducer(formReducer,{inputs:{name:{value:'',isValid:false},email:{value:'',isValid:false},phoneNo:{value:'',isValid:false}},isValid:false});

  const inputHandler=(id,val,isValid=true)=>
  {
    dispatch({type:'CHECK',id:id,value:val,isValid:isValid})
  }

  const addCustomer=(event)=>
  {
       event.preventDefault();


       const customer={
         id:Math.random().toString(),
         name:formState.inputs.name.value,
         email:formState.inputs.email.value,
         phoneNo:formState.inputs.phoneNo.value
       };
       props.addCustomer1(customer);
       
  }
  return (
    <form className='border-2 border-black w-1/2 mr-auto ml-auto mt-10 p-10 rounded-md' onSubmit={addCustomer}>
      <Input type='text' id='name' label='Name' element='input' errorText="" placeholder="Enter your name." onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]}></Input>
      <label className='text-lg font-semibold flex'>Email</label>
      <input  className='border-2 border-black' type='email' id='email' placeholder="Enter your email adress." onChange={(event)=>{inputHandler('email',event.target.value,validate(event.target.value,[VALIDATOR_EMAIL()]))}} />
      <Input element='input' label='PhoneNo' className='border-2 border-black' id='phoneNo'  placeholder="Enter your phoneNo." onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(10),VALIDATOR_MAXLENGTH(10)]} ></Input>

      <button onClick={addCustomer} path="/" className={`bg-green-400 mt-2 flex text-black p-2 rounded-md ${!formState.isValid && ' bg-red-400'} `} disabled={!formState.isValid} >ADD CUSTOMER</button>
    </form>
  )
}

export default NewUser;
