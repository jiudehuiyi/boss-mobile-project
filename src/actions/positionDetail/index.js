export const getPositionDetailData = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"GET_POSITION_DETAIL",
            data
        })
    }
}
