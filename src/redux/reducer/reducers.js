import { getdatashow } from '../types/datatypes';


const initialdata = {
	data: []
}


function reducers (state=initialdata, action){
	
	switch(action.type) {
    	case 'getdatashow':
      		return {data: action.payload };
   default: 
      return state; 
  }


}



export default reducers;


 