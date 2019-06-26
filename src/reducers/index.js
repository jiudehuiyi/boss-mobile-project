import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import test from './test';
import HomeReducer,{homePositionInformationReducer} from './home';
import positionShowReducer,{positionDataReducer} from './positionShow';
import { positionDetailReducer } from '../reducers/positionDetail'
export default combineReducers({
    test,
    HomeReducer,
    homePositionInformationReducer,
    positionShowReducer,
    positionDataReducer,
    positionDetailReducer,
    routing: routerReducer,
})
