import axios from 'axios';
import { getdatashow } from '../types/datatypes';




const datagetshwoing = () => async(dispatch)=>{
	try{
		const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")		
		dispatch({type:getdatashow, payload:data});
	}catch(error){
		console.log(error)
	}

}



export default datagetshwoing;