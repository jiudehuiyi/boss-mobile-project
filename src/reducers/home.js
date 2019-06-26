const homeReducer = (state={},action)=>{
    switch( action.type ){
        case "HOME_INDEX_IMG_ACTION":
            return {
                ...state,
                data:action.data
            } 
        default :
            return state;    
    }
}

export const homePositionInformationReducer = (state={},action)=> {
    switch(action.type) {
        case "HOME_POSITION_INFORMATION":
            return {
                ...state,
                data:action.data
            }
        default :
            return state    
    }
}
 


export default homeReducer;