import axios from 'axios';
 const baseURL = "http://localhost:4000";

//获取首页图片

export const getHomeImages = ()=>{
    const url = `${baseURL}/home/headerImgs`;
    return axios.get(url,{withCredentials:true});
}
//获取首页内容列表
export const getHomePositionList = ()=>{
    const url = `${baseURL}/home/positionSort`;
    return axios.get(url,{withCredentials:true});
}

//获取省份城市数据
export const getCitysData = ()=>{
    const url = `${baseURL}/home/citys`;
    return axios.get(url,{withCredentials:true})
}
//获取职位列表信息
export const getPositionListData = (city,searchPosition)=>{
    const url = `${baseURL}/home/positionList?city=${city}&searchPosition=${searchPosition}`;
    return  axios.get(url,{withCredentials:true})
}

export const getPositionListPostData=(obj)=>{
    // obj = JSON.stringify(obj);
    return axios({
        method:"post",
        data:obj,
        url : 'http://localhost:4000/home/positionList',
        // responseType: 'json',
        // headers: { 'content-type': 'application/json' },
        withCredentials:true
    })
}

//职位详情接口
export const positionDetail=(obj)=>{
    return axios({
        method:"post",
        data:obj,
        url:`${baseURL}/home/positionDetail`,
        withCredentials:true
    })
}