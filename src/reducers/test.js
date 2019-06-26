const test = (state=[],action)=>{
    switch( action.type ){
        case "TEST":
            return {
                "test":"test"
            }
        default :
            return state;    
    }
}

export default test;