import { connect } from 'react-redux';
import PositionShow from '../../components/positionShow';
import { getCitysDataAction,getPositionDataAction } from '../../actions/positionShow';
const mapStateToProps = (state,ownProps)=>{
    return {
        citysData:state.positionShowReducer.data || [],
        positionData :state.positionDataReducer.data || []
    };
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        getCitysDataFunc:(data)=>{
            dispatch( getCitysDataAction(data) );
        },
        getPositionDataFunc:(data)=>{
            dispatch(  getPositionDataAction(data) );
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(PositionShow);
