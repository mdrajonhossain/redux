import axios from 'axios';
import { getdatashow } from '../types/datatypes';




const datagetshwoing = (...search) => async(dispatch)=>{
 
		const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")		
		
		const search_data = data.filter((dada)=> {
			return dada.title.toLowerCase().includes(search)
		})
		dispatch({type:getdatashow, payload:search_data});
}



export default datagetshwoing;


