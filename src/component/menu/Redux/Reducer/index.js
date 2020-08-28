import {updateCartReducer} from './allReducer';
import {arrayForCart} from './allReducer';
import {combineReducers} from 'redux';


const everyReducers=combineReducers({
    updateCart:updateCartReducer,
    cartArray:arrayForCart,
});

export default everyReducers;