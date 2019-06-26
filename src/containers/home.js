import Home from '../components/home';
import { connect } from 'react-redux';
import { getHomeIndexImgAction,getHomePositionInformationAction } from '../actions/home';

const mapStateToProps = (state,ownProps)=>{
    return {
        //传递给首页的图片数据
        homeIndexImgData:state.HomeReducer.data || [],
        homePositionInformationData:state.homePositionInformationReducer.data || []
    };
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        //首页头部图片获取函数
        getHomeIndexImgFunc:(data)=>{
            dispatch( getHomeIndexImgAction(data) );
        },
        //获取首页内容职位信息
        getHomePositionInformationFunc:(data)=>{
            dispatch(getHomePositionInformationAction(data));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

