import React from 'react'
import { redirect, useParams } from 'react-router-dom'
import { useState} from 'react';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import Input from '../Shared/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE, validate } from '../Shared/Validator';

const formReducer=(state,action)=>
{
     if(action.type==='CHECK')
     {
          let isValid1=true;
          for(const id in state.inputs)
          {
              if(id===action.id)
              {isValid1=isValid1&&action.isValid}

              else isValid1=isValid1&&state.inputs[id].isValid
          }

          return {
            ...state,
            inputs:{
              ...state.inputs,
              [action.id]:{
                value:action.value,
                isValid:action.isValid
              }
            },
            isValid:isValid1
          }
     }
     return state;
}
const CustomerInfo = (props) => {
    
    const [updateModal,setUpdateModal]=useState(false);
    const [deleteModal,setDeleteModal]=useState(false);
    const [formState,dispatch]=useReducer(formReducer,{inputs:{name:{value:"",isValid:false},email:{value:"",isValid:false},phoneNo:{value:"",isValid:false}},isValid:false})

    const userId=useParams().userId;
     const user=props.customers.filter((c)=>{return c.id===userId});

    //  console.log(user);

    const updateCustomerHandler=()=>
    {
           setUpdateModal(true);
    }

    const closeUpdateCustomerHandler=()=>
    {
           setUpdateModal(false);
    }

    const deleteCustomerHandler=()=>
    {
            setDeleteModal(true);
    }

    const closeDeleteCustomerHandler=()=>
    {
            setDeleteModal(false);
    }
    
    const deleteCustomer=()=>
    {
        props.deleteCustomer(userId);
        // console.log(userId);
    }

    const updateCustomer=(event)=>
    {
       event.preventDefault();
      //  alert(1);
      //  console.log(formState);
       const updatedDetails={name:formState.inputs.name.value,email:formState.inputs.email.value,phoneNo:formState.inputs.phoneNo.value};
      //  console.log(updatedDetails);
      props.updateCustomer(userId,updatedDetails);
      setUpdateModal(false);
      
      //  console.log(formState.inputs);
    }

    const formHandler=(id,value,isValid)=>
    {   
      // console.log(id,value,isValid);
        dispatch({type:"CHECK",id:id,value:value,isValid:isValid});

        // console.log(formState);
    }

    const updateModalFooter=<div><button className="bg-red-500 rounded-lg p-3 m-2" onClick={closeUpdateCustomerHandler}>CLOSE</button></div>;

    const deleteModalFooter=<div><button className="bg-red-500 rounded-lg p-3 m-2" onClick={closeDeleteCustomerHandler}>CLOSE</button>
    <Link className="bg-red-500 rounded-lg p-3 m-2" to="/" onClick={deleteCustomer}>DELETE CUSTOMER</Link>
    </div>;
    
  return (
    <>
    <Modal show={updateModal} header="Update your customer details here." onCancel={closeUpdateCustomerHandler} footer={updateModalFooter}>
    <form  className='p-3 rounded-md' onSubmit={updateCustomer}>
     <Input element="input" id="name" label="Enter updated name." onInput={formHandler} validators={[VALIDATOR_REQUIRE()]}></Input>

     <label className='font-bold flex'>Enter updated email</label>
     <input className='border-2 border-black w-full' type="email" id="email" onChange={(event)=>{formHandler('email',event.target.value,validate(event.target.value,[VALIDATOR_EMAIL()]))}}></input>

     <Input element="input" id="phoneNo" label="Enter updated phoneNo." onInput={formHandler} validators={[VALIDATOR_MINLENGTH(10),VALIDATOR_MAXLENGTH(10)]}></Input>
     <button type="submit" className={`rounded-md bg-green-400 p-3 m-3 flex text-center ${!formState.isValid && 'bg-red-400'}`} disabled={!formState.isValid}>UPDATE DETAILS</button>
    </form>
    </Modal>

    <Modal show={deleteModal} header="Are you sure you want to delete this customer!" onCancel={closeDeleteCustomerHandler} footer={deleteModalFooter}>
    </Modal>
    <div className='flex-col justify-center p-10 bg-slate-400 mt-10 ml-10 mr-10 hover:bg-slate-500 rounded-md'>
       <h1>This is one of our user.His name is:- {user[0].name||" "}</h1>
      <h2>This is one of our user.His email is:- {user[0].email||" "}</h2>
      <h3>This is one of our user.His phoneNo is:- {user[0].phoneNo||" "}</h3>
      
      <button className='bg-green-400 rounded-md p-5 m-2 mt-10' onClick={updateCustomerHandler}>UPDATE DETAILS</button>
      <button className={`bg-red-400 rounded-md p-5 m-2 mt-10 `} onClick={deleteCustomerHandler}>DELETE CUSTOMER</button>
      
    </div>
    </>
  )
}

export default CustomerInfo
