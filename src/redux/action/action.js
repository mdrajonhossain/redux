
import axios from 'axios';
import { getdatashow } from '../types/datatypes';




const datagetshwoing = (...search) => async(dispatch)=>{

	try{ 
		const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")		
		
 

		const search_data = data.filter((dada)=> {
			return dada.title.toLowerCase().match(search);
		})
		
		dispatch({type:getdatashow, payload:search_data});

		}catch(error){
		console.log(error)
	}
}



export default datagetshwoing;


