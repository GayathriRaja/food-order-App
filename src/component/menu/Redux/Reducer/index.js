import {updateCartReducer} from './allReducer';
import {arrayForCart} from './allReducer';
import {priceCalculationReducer} from './allReducer'
import {combineReducers} from 'redux';


const everyReducers=combineReducers({
    updateCart:updateCartReducer,
    cartArray:arrayForCart,
    priceAmount:priceCalculationReducer
});

export default everyReducers;