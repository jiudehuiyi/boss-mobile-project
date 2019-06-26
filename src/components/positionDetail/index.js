import React, { Component } from 'react'
import { Flex,Tag ,WhiteSpace,Icon} from 'antd-mobile';
import { positionDetail } from '../../requestDataApi/home'
import './style.css'
import searchLogo from '../../imgs/searchLogo.png'
export default class PositionDetail extends Component {

    //跳转首页
    dumpHome=()=>{
        this.props.history.push('/');
    }
    //跳转搜索职位
    dumpSearchPosition=()=>{
        this.props.history.push('/job')
    }

    componentDidMount(){
        const pathname = this.props.location.pathname;
        const search = this.props.location.search;
        let deliverObj = {};
        deliverObj['pathname'] = pathname;
        deliverObj['search'] = search;
        positionDetail(deliverObj).then( (res)=>{
            this.props.getPositionDetailFunc(res.data)
        } ).catch( (err)=>{
            console.log("错误为："+err);
        } )
    }

    render() {
        //总的数据来源
        const positionDetailData = this.props.positionDetailData;
        //职位信息概括
        const positionInformation = positionDetailData.length>0?positionDetailData[0].positionInformation:{};
        const tranPeople = positionDetailData.length>0?positionDetailData[0].tranPeople:{};
        const positionDescription = positionDetailData.length>0?positionDetailData[0].positionDescription:{}
        const collectionIntroduction = positionDetailData.length>0?positionDetailData[0].collectionIntroduction:{}
        const renderListButton =collectionIntroduction.list? collectionIntroduction.list.map( (item,index)=>{
            return (
                <span key={item} style={{ display:"inline-block",color:"#62D5C8",border:"2px solid #62D5C8",borderRadius:"15px",padding:"5px 10px 5px 10px",marginRight:"10px" }}>{item}</span>
            )
        } ):""
        const companyInformation = positionDetailData.length>0?positionDetailData[0].companyInformation:{}
        const workPlace =  positionDetailData.length>0?positionDetailData[0].workPlace:{}
        const companyIntroduction = positionDetailData.length>0?positionDetailData[0].companyIntroduction:{}
        const similarPosition = positionDetailData.length>0?positionDetailData[0].similarPosition:{};
        const renderSimilarPosition = similarPosition.length>0?similarPosition.map( (item,index)=>{
            return (
                             <div style={{ height:"47px",padding:"20px",borderBottom:"1px solid #EFF1F7" }} className='clearfix'>
                                <div style={{ float:"left" }}>
                                    <div style={{ display:"inline-block",width:"47px",height:"47px" }}>
                                        <img style={{"width":"47px",height:"47px"}} src={item.avatar}/>
                                    </div>
                                    <div style={{ display:"inline-block",marginLeft:"10px" }}>
                                        <p>{item.position}</p>
                                        <p style={{ color:"#6B4A7A",fontSize:"12px" }}>{item.companyAndPlace}</p>
                                    </div>
                                </div>
                                <div style={{ float:"right",textAlign:"center" }}>
                                    <div style={{ color:"red",fontSize:"20px",marginBottom:"5px" }}>{item.money}</div>
                                    <div style={{ padding:"7px 20px 7px 20px",border:"2px solid #5DD5C8",borderRadius:"20px",color:"#5DD5C8" }}>{item.font}</div>
                                </div>
                            </div>
            )
        } ):""
        const recomCompany = positionDetailData.length>0?positionDetailData[0].recomCompany:{}
        const rendreRecomCompany = recomCompany.length>0?recomCompany.map( (item,index)=>{
            return (
                <span key={item} style={{ paddingRight:"5px",display:"inline-block",color:"#9FA3B0",fontSize:"12px",lineHeight:"20px" }}>{item}</span>
            )
        } ):""

        console.log(positionDetailData)
        return (
            <div>
                {
                    positionDetailData.length>0?
                    <div className='position_detail'>
                        <div className='position_detail_title clearfix'>
                            <div className='position_detail_title_bosszhipin' onClick={ ()=>this.dumpHome() }></div>
                            <div className='position_detail_title_searchPosition' onClick={ ()=>this.dumpSearchPosition() }>
                                <img src={searchLogo} />
                            </div>
                        </div>
                        <div className='position_detail_information'>
                            <div className='clearfix'>
                                <span style={{ float:"left",fontSize:"20px",color:"#fff",fontWeight:"bold" }}>{positionInformation.position}</span>
                                <span style={{ float:"right",fontSize:"20px",color:"#fff",fontWeight:"bold" }}>{positionInformation.money}</span>
                            </div>
                            <div style={{ marginTop:"10px",color:"#fff",fontSize:"12px",fontWeight:"bold" }}>
                                <span>{positionInformation.place}</span>
                                <span style={{ paddingLeft:"5px",paddingRight:"5px" }}>|</span>
                                <span>{positionInformation.date}</span>
                                <span style={{ paddingLeft:"5px",paddingRight:"5px" }}>|</span>
                                <span>{positionInformation.education}</span>
                            </div>
                            <div style={{ width:"40px",height:"20px",marginTop:"10px" }}>
                                <Tag style={{ backgroundColor:"#62D5C8",color:"#fff" }}>{positionInformation.position}</Tag>
                            </div>
                            <div style={{ marginTop:"10px",color:"#BAE8D7",fontSize:"12px" }}>
                                <span>更新于:</span>
                                <span>{positionInformation.updateDate}</span>
                            </div>

                        </div>
                        <div className='position_detail_tranPeople clearfix'>
                            <div style={{ float:"left" }} className='clearfix'>
                                <div style={{ float:"left",width:"53px",height:"53px",marginTop:"20px",marginRight:"20px" }}>
                                    <img style={{ width:"53px",height:"53px",borderRadius:"50%"  }} src={tranPeople.avatar} />
                                </div>
                                <div style={{ float:"left" }}>
                                    <div style={{ height:"30px",fontSize:"16px", }}>{tranPeople.name}</div>
                                    <div style={{ height:"28px",fontSize:"12px",color:"#9FA3AF" }}>
                                        <span>{tranPeople.company}</span>
                                        <span>  .  </span>
                                        <span>{tranPeople.position}</span>

                                    </div>
                                </div>
                            </div>
                            <div style={{ float:"right",width:"100px",height:"30px",lineHeight:"30px",borderRadius:"20px",backgroundColor:"#5DD5C8",textAlign:"center",marginTop:"20px",color:"#fff" }}>
                                立即沟通
                            </div>
                        
                        </div>
                        <div className='position_detail_positionDescription'>
                            <div style={{ padding:"10px",height:"44px",lineHeight:"44px",fontSize:"16px",fontWeight:"bold" }}>{positionDescription.descriptionTitle}</div>
                            <div style={{ padding:"10px",lineHeight:"26px",color:"#ACABB2",fontSize:"14px" }} dangerouslySetInnerHTML={{__html:positionDescription.content }}>
                                
                               
                            </div>
                        </div>
                        <div className='position_detail_collectionDescription'>
                            <div style={{ fontSize:"16px",height:"40px",lineHeight:"40px",paddingLeft:"10px",paddingRight:"10px" }}>{collectionIntroduction.title}</div>
                            <div style={{ paddingLeft:"10px",paddingRight:"10px",color:"#7E8793",fontSize:"16px",marginBottom:"10px" }}>{collectionIntroduction.description}</div>
                            <div style={{ paddingLeft:"10px",paddingRight:"10px",marginTop:"5px",marginBottom:"20px" }}>
                                    {
                                        renderListButton
                                    }                            
                            </div>
                        </div>
                        <div className='position_detail_companyInformation' style={{ paddingLeft:"10px",paddingRight:"10px",marginBottom:"20px" }}>
                            <div style={{ fontSize:"16px",fontWeight:"bold",height:"40px",lineHeight:"40px" }}>{companyInformation.title}</div>
                            <div style={{ color:"#7E8793",marginBottom:"10px" }}>{ companyInformation.description }</div>
                            <div style={{ border:"1px solid #EBECEF",padding:"10px",fontSize:"12px" }}>
                                <Flex>
                                    <Flex.Item>{companyInformation.represent}</Flex.Item>
                                    <Flex.Item>{companyInformation.money}</Flex.Item>
                                </Flex>
                                <WhiteSpace size='xl'/>
                                <Flex>
                                    <Flex.Item>{companyInformation.upsetTime}</Flex.Item>
                                    <Flex.Item>{companyInformation.status}</Flex.Item>
                                </Flex>
                                <div style={{ height:"40px",lineHeight:"40px",marginTop:"30px",borderTop:"1px solid #EBECEF",textAlign:"center",color:"#9FA3B0" }}>展开<Icon type='down' style={{  verticalAlign:"middle" }} /></div>
                            </div>
                        </div>
                        <div className='position_detail_workPlace' style={{ paddingLeft:"10px",paddingRight:"10px",marginBottom:"20px" }}>
                            <div style={{ fontSize:"16px",color:"#000",fontWeight:"bold" }}>{workPlace.title}</div>
                            <div style={{ marginTop:"30px",fontSize:"14px",color:"#62687A" }}>{workPlace.place}</div>
                        </div>
                        <div className='position_detail_companyIntroduction' style={{ padding:"10px",height:"80px",backgroundColor:"#EEFBF9" }}>
                        <div style={{ float:"left" }} className='clearfix'>
                                <div style={{ float:"left",width:"64px",height:"64px",marginTop:"20px",marginRight:"20px" }}>
                                    <img style={{ width:"64px",height:"64px" }} src={companyIntroduction.companyLogo} />
                                </div>
                                <div style={{ float:"left",marginTop:"10px" }}>
                                    <div style={{ height:"30px",fontSize:"16px", }}>{companyIntroduction.companyName}</div>
                                    <div style={{ height:"28px",fontSize:"12px",color:"#9FA3AF" }}>
                                        <span>{companyIntroduction.detailCompanyName}</span>
                                    </div>
                                    <div style={{ color:"#A9C3E6",fontSize:"12px" }}>
                                        <span>{companyIntroduction.sort}</span>
                                        <span style={{ marginLeft:"5px",marginRight:"5px" }}>|</span>
                                        <span>{companyIntroduction.rz}</span>
                                        <span style={{ marginLeft:"5px",marginRight:"5px" }}>|</span>
                                        <span>{companyIntroduction.people}</span>

                                    </div>
                                </div>
                            </div>
                            <div style={{ float:"right",width:"100px",height:"30px",lineHeight:"30px",borderRadius:"20px",backgroundColor:"#5DD5C8",textAlign:"center",marginTop:"20px",color:"#fff" }}>
                                关注该公司
                            </div>
                        
                        </div>
                        <div className='position_detail_similarPosition' style={{ backgroundColor:"#fff",paddingTop:"10px",marginBottom:"20px" }}>
                            <div style={{ height:"40px",borderBottom:"1px solid #EFF1F7",paddingLeft:"10px",paddingRight:"10px" }}>相似职位</div>
                            {
                                renderSimilarPosition
                            }
                        </div>
                        <div className='position_detail_recomCompany' style={{ padding:"20px 10px 20px 10px",borderBottom:"1px solid #5DD5C8" }}>
                            <div>推荐公司</div>
                            <div style={{ marginTop:"20px" }}>
                               {
                                   rendreRecomCompany
                               }

                            </div>
                        </div>
                        <div className='position_detail_footer' style={{ height:"30px",padding:"10px",fontSize:"12px",color:"#9FA3B0" }}>
                            {positionDetailData[0].footerFont}
                        </div>
                    </div>
                    :<div>你搜索的公司暂无数据</div>
                 }
        </div>
            
        )
    }
}
