import React,{ Component } from 'react';
import { getHomeImages,getHomePositionList } from '../requestDataApi/home';
import './home.css';
import { WingBlank,SearchBar,Button,WhiteSpace } from 'antd-mobile';
import PositionListItem from './positionListItem';
export default class Home extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //获取首页头部图片数据
        getHomeImages()
            .then( (res)=>{
                this.props.getHomeIndexImgFunc(res.data)
            } ).catch( function(error){
                console.log("Error:"+error);
            } )
        //获取首页内容职位列表
        getHomePositionList()
            .then( (res)=>{
                this.props.getHomePositionInformationFunc(res.data);
            } ).catch( (error)=>{
                console.log("错误:"+error)
            } )

    }

    render(){
        //首页头部图片数据
        const homeIndexImgData = this.props.homeIndexImgData || [];
        const homePositionInformationData = this.props.homePositionInformationData || [];
        const renderPositionList = homePositionInformationData.length>0?
                                    homePositionInformationData.map( (item,index)=>{
                                        return (
                                            <div key={item.title}>
                                                <PositionListItem key={item.id} positionData={item}/>
                                            </div>
                                        )
                                    } ):""
        return (
            <div className='home'>
                <div className='home-header'>
                    <div className='home-bg'>
                        <img  src={homeIndexImgData.length>0?homeIndexImgData[0].url:""} alt="zhipin" />
                    </div>
                    <div className='home-bg-font'>
                        <img src={ homeIndexImgData.length>0?homeIndexImgData[1].url:""} alt="bosszhipin" />
                    </div>
                    <div className='home-search'>
                        <WingBlank >
                                <SearchBar placeholder="搜索职位/公司"  />
                         </WingBlank>

                    </div>
                </div>

                <div className='home-content'>
                  
                {
                    renderPositionList
                }
                </div> 
                <div className='home-footer'>
                    <div>违法和不良信息举报邮箱：jubao@kanzhun.com</div>
                    <WhiteSpace />
                    <div>企业服务热线和举报投诉：400 065 5799</div>    
                </div> 
            </div>
        )
    }


}

