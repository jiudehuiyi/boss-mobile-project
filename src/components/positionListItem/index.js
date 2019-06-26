import React, { Component } from 'react';
import './style.css';
import { WingBlank,WhiteSpace } from 'antd-mobile';
import { Link,withRouter } from 'react-router-dom';
import Cookie from '../../api/docCookies';
 class PositionListItem extends Component {

    constructor(props){
        super(props);
    }

    dumpPositionList=(ev,url,title)=>{
        Cookie.setItem('searchPosition',title);//设置cookie
        ev.preventDefault();
        this.props.history.push(url);
    }

    render() {
        const positionData = this.props.positionData || {};
        const renderA = positionData.tags.length>0?positionData.tags.map( (item,index)=>{
            return <Link to="" onClick={ (ev)=>this.dumpPositionList(ev,item.url,item.title) } key={item.title}> {item.title} </Link>
        } ):"";
        return (
            <WingBlank>
                <div className='position-list-item'>
                    <WhiteSpace size='xl' />
                    <div className='position-list-item-header'>
                        <img src={positionData.url} />
                        <span>{positionData.title}</span>
                    </div>
                    <WhiteSpace size='xl' />

                    <div className='position-list-item-content'>
                       {renderA}

                    </div>
                    <WhiteSpace size='xl' />

                </div>
            </WingBlank>
        )
    }
}

export default withRouter(PositionListItem);