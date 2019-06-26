
//获取首页头部图片action
export const getHomeIndexImgAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"HOME_INDEX_IMG_ACTION",
            data
        })
    }
}
        //获取首页内容职位信息
export const getHomePositionInformationAction=(data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"HOME_POSITION_INFORMATION",
            data
        })
    }
}


