import './App.css';
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import datagetshwoing from './redux/action/action'




const App = ()=> {
      const dispatch = useDispatch();
      
      const todos = useSelector(state => state.reduce);



useEffect(()=>{
    dispatch(datagetshwoing());
},[dispatch])


 
  return (

    <>
 {todos.data.map((data)=>{
 	return(
 		<>
 		<div className="">{data.title}</div>
 		</>
 		)
 })}

    </>
  );
}

export default App;
