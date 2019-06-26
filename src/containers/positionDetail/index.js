import { connect } from 'react-redux'
import PositionDetail  from '../../components/positionDetail'
import { getPositionDetailData } from '../../actions/positionDetail'

const mapStateToProps = (state,ownProps)=>{
    return {
        positionDetailData:state.positionDetailReducer.data||[]
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        getPositionDetailFunc:(data)=>{
            dispatch( getPositionDetailData(data) );
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(PositionDetail);
