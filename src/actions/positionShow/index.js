
export const getCitysDataAction = (data)=>{
    // console.log(data)
    return (dispatch,getState)=>{
         dispatch({
            type:"GET_CITYS_DATA",
            data
        })
    }
}
export const getPositionDataAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"GET_POSITION_DATA",
            data
        })
    }
}

