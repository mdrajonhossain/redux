import './App.css';
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import datagetshwoing from './redux/action/action'




const App = ()=> {
      const dispatch = useDispatch();
        const [search, setSearch] = useState('');
      
      const todos = useSelector(state => state.reduce);


useEffect(()=>{
    dispatch(datagetshwoing(search));
},[search])

const handleChange = (event)=> {
    setSearch(event.target.value);
  }
 
  return (

    <>
    <input name="firstName" onChange={handleChange} />
    
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
