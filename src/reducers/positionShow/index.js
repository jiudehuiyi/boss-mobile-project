
const positionShowReducer = (state={},action)=>{
    switch(action.type) {
        case "GET_CITYS_DATA":
            return {
                ...state,
                data:action.data
            }
        default :
            return state;     
    }

}
export const positionDataReducer = (state={},action)=>{
    switch(action.type){
        case 'GET_POSITION_DATA':
            return {
                ...state,
                data:action.data
            }
        default :
            return state;    
    }
}

export default positionShowReducer;
