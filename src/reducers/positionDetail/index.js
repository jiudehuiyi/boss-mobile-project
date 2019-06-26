export const positionDetailReducer = (state={},action)=> {
    switch(action.type) {
        case "GET_POSITION_DETAIL":
            return {
                ...state,
                data:action.data
            }
        default :
            return state    
    }
}
 