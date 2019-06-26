import React, { Component } from 'react';
import { WingBlank,WhiteSpace,Icon,InputItem, Picker,List,Flex,ActionSheet,PullToRefresh }  from 'antd-mobile';
import './style.css';
import Cookie from '../../api/docCookies';
import { getCitysData,getPositionListData,getPositionListPostData } from '../../requestDataApi/home'
class PositionShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            showPicker:false,
            searchPosition:"",
            city:"全国",
            select:[
              {
                title:"经验",
                arrowDown:true,
                children:['不限', '在校生', '应届生', '一年以内', '1-3年','3-5年','5-10年','10年以上']
              },
              {
                title:"学历",
                arrowDown:true,
                children:['不限', '初中及以下', '中专/中技', '高中', '大专','本科','硕士','博士']
              },
              {
                title:"薪资",
                arrowDown:true,
                children:['不限', '3K以下', '3-5K', '5-10K', '10-15K','15-20K','20-30K','30-50K','50K以上']
              },
              {
                title:"规模",
                arrowDown:true,
                children:['不限', '0-20人', '20-99人', '100-499人', '500-999人','1000-9999人','10000人以上']
              },
              {
                title:"融资",
                arrowDown:true,
                children:['不限', '未融资', '天使轮', 'A轮', 'B轮','C轮','D轮及以上','已上市']
              }
            ]
        }
    }

    dumpHome=()=>{
        this.props.history.push('/');
    }

    showPickerView=()=>{
        this.setState({
            showPicker:true
        })
    }
    //选择城市,确定后回调函数
    handleOk=(val)=>{
      Cookie.setItem("city",val[val.length-1]);
      this.forceUpdate();
      const city = Cookie.getItem('city');
      const searchPosition = Cookie.getItem('searchPosition').toLocaleLowerCase();
      if(!city) {
        Cookie.setItem("city","全国");
      }
      getPositionListData(city,searchPosition).then( (res)=>{
        this.props.getPositionDataFunc(res.data)
      } ).catch( (err)=>{
        console.log("错误:"+err);
      } )
    }
    ////选择城市,取消后回调函数
    handleDismiss=()=>{

    }

    hidePicker=()=>{
        this.setState({
            showPicker:false
        })
    }

    changeSearch=(value)=>{
      Cookie.setItem("searchPosition",value)
      this.setState({
        searchPosition:value
      })
    }
    searchConfirm=(value)=>{
      const city = Cookie.getItem('city');
      const searchPosition = Cookie.getItem('searchPosition').toLocaleLowerCase();
      if(!city) {
        Cookie.setItem("city","全国");
      }
      
      getPositionListData(city,searchPosition).then( (res)=>{
        this.props.getPositionDataFunc(res.data)
      } ).catch( (err)=>{
        console.log("错误:"+err);
      } )
    }

    componentDidMount(){
      const city = Cookie.getItem('city');
      const searchPosition = Cookie.getItem('searchPosition').toLocaleLowerCase();
      if(!city) {
        Cookie.setItem("city","全国");
      }

      getPositionListData(city,searchPosition).then( (res)=>{
        this.props.getPositionDataFunc(res.data)
      } ).catch( (err)=>{
        console.log("错误:"+err);
      } )
      

      //页面加载完毕,加载搜索栏和选定区域的职位列表
      // console.log(searchPosition)

        
        const searchKeyword = Cookie.getItem('searchPosition');
        this.setState({
          searchPosition:searchKeyword
        })
      }
    getCitysData=()=>{
           //获取省份城市数据
           getCitysData()
           .then( (res)=>{
             this.props.getCitysDataFunc(res.data)
           } ).catch( (err)=>{
             console.log("错误为:"+err)
           } )
      }

    //选择经验
    showActionSheet=(children,index,arr)=>{
      //改变箭头的上下方向
     arr[index].arrowDown = false;
      this.setState({
        select:arr
      })

      ActionSheet.showActionSheetWithOptions({
        options:children,
      },
      (buttonIndex)=>{
        // console.log(buttonIndex);
        //改变箭头的上下方向
        arr[index].arrowDown = true;
        this.setState({
          select:arr
        })
        if(index===3 || index ===4) {
          alert("规模和融资这两个选项没有做,但是和前面三个原理是一样的");
        }
        //获取改变筛选条件后相应，获取改变相对应的数组
        const realArr = arr[index];
        //获取选择后的值
        const realValue = realArr.children[buttonIndex];
        //这里使用post进行请求,之前都是用GET，这里尝试用post;
        //传递给后台的参数对象
        let deliverObj = {};
        //获取城市
        let city = Cookie.getItem('city');
        deliverObj['place'] = city;
        //获取关键词
        let searchKeyWord = Cookie.getItem('searchPosition').toLocaleLowerCase();
        deliverObj['position'] = searchKeyWord;
        //因为数据库只写入了这三个筛选项,公司规模和融资原理是一样的,这里省略不写
        if(realArr.title==='经验') {
          Cookie.setItem('date',realArr.children[buttonIndex]);
        }
        if(realArr.title==='学历') {
          Cookie.setItem('education',realArr.children[buttonIndex]);
        }
        if(realArr.title==='薪资') {
          Cookie.setItem('money',realArr.children[buttonIndex]);
        }
        
        deliverObj['date'] = Cookie.getItem('date');
        deliverObj['education'] = Cookie.getItem('education');
        deliverObj['money'] = Cookie.getItem('money');

        for(let key in deliverObj) {
          if(deliverObj[key]=="undefined") {
            delete deliverObj[key]
          }
        }

        getPositionListPostData(deliverObj).then( (res)=>{
          this.props.getPositionDataFunc(res.data)
        } ).catch( (err)=>{
          console.log("错误:"+err);
        } )

      }
      )

      
    }  

    dumpDetailPosition=(url)=>{
      this.props.history.push(url);
    }

    searchKeyWordGetData=()=>{
      const city = Cookie.getItem('city');
      const searchPosition = Cookie.getItem('searchPosition').toLocaleLowerCase();
      if(!city) {
        Cookie.setItem("city","全国");
      }
      
      getPositionListData(city,searchPosition).then( (res)=>{
        this.props.getPositionDataFunc(res.data)
      } ).catch( (err)=>{
        console.log("错误:"+err);
      } )
    }

    topRefresh=()=>{
      console.log('刷新成功')
    }


    render() {
        
         
          const citysData = this.props.citysData;
          const positionData = this.props.positionData;
          const Item = List.Item;
          const Brief = Item.Brief;
          const renderSelect = this.state.select.map( (item,index,arr)=>{
              return (
                <Flex.Item key={item.title} onClick={ ()=>this.showActionSheet(item.children,index,arr) }>
                    <span>{item.title}</span>
                    <Icon type={ item.arrowDown?"down":"up" } size='xxs' style={{ verticalAlign:'middle' }} />
                </Flex.Item>
              )
          } )
          const renderPositionList = positionData.length>0?positionData.map( (item,index)=>{
            return (
                  
                   <Item  
                          onClick={ ()=>this.dumpDetailPosition(item.url) }
                          key={item._id}
                          className='position_show_List_item'
                          thumb={item.companyLogo}
                          extra={item.money}
                          multipleLine
                        >
                            <div className='position_show_List_item_position'>{item.position}</div>
                            <div className='position_show_List_item_company'>{item.company}</div>
                            <div className='position_show_List_item_experience'>{item.place} {item.date} {item.education}</div>
                    </Item>
            )
          } ):""
          return (
            <div className='position_show'>
                <WingBlank >
                    <div className='position_show_header'>
                        <div className='position_show_header_returnHome' onClick={ ()=>this.dumpHome() }>
                            <img  src="https://static.zhipin.com/zhipin/v169/h5/wap/images/icon-home.png" />
                        </div>
                        <div className='position_show_header_searchBar'>
                           <div className='position_show_header_searchBar_one'>
                            <Picker 
                                      data={citysData.length>0?citysData[0].citys:[]}
                                      title="选择城市"
                                      extra=" "
                                      onOk={ (val)=>this.handleOk(val) }
                                      onDismiss={ ()=>this.handleDismiss() }
                                    >    
                                      <List.Item onClick={ ()=>this.getCitysData() }>
                                          <span style={{ fontSize:"12px" }}>{Cookie.getItem('city')}</span> 
                                          <Icon type='down' size="xxs" style={{ verticalAlign:"middle",marginLeft:'5px' }} /> 
  
                                        </List.Item>                      
                                </Picker>
                           </div>
                           
                            <div className='position_show_header_searchBar_two'>
                              <List className='position_show_header_searchBar_Input'>
                                  <InputItem  value={  this.state.searchPosition } style={{ fontSize:'12px' }} onChange={ (value)=>this.changeSearch(value) } onVirtualKeyboardConfirm={(val)=>this.searchConfirm(val)} ></InputItem>
                              </List>
                            </div>
                        </div>
                        <div onClick={ ()=>this.searchKeyWordGetData() } className='position_show_header_keyword'>搜索</div>
                    </div>
                </WingBlank>
                
             
                <div className='position_show_selectCondition'>
                    <Flex >
                      
                      {
                        renderSelect
                      }
                    </Flex>
                </div>

                <div className='position_show_List'>
                  <PullToRefresh onRefresh={ ()=>this.topRefresh() }>
                      <List >
                        {
                          renderPositionList
                        }
                      </List>                    
                  </PullToRefresh>

                </div>



            </div>
        );
    }
}

export default PositionShow;