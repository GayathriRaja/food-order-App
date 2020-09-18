import React, { useState,useEffect } from 'react';
import { foodList } from '../../utils/constants';
import paymentMode from '../PaymentBill/ModeOfPayment';
import {useHistory} from 'react-router-dom';
// import { cuisines } from '../../utils/constants';
// import Cart from './Cart';

import increaseCartAction from './Redux/Action/increaseCartAction';
import arrayForCartAction from './Redux/Action/arrayForCartAction';
import deleteArrayAction from './Redux/Action/deleteArrayAction';
import reducecCartAction from './Redux/Action/reducecCartAction';
import priceCalculationAction from './Redux/Action/PriceCalculationAction';
import incrementArrayAction from './Redux/Action/incrementArrayAction';
import decreasePriceCalculation from './Redux/Action/decreasePriceCalculation';



import {useDispatch,useSelector} from 'react-redux';  


const FoodItemListFunctionalComponent=(props)=>{ 

  var history=useHistory();


 const cartValueUpdate=useSelector(state=>state.updateCart); 
 const arrayRedux=useSelector(state=>state.cartArray);
 const totalAmount=useSelector(state=>state.priceAmount);
//  console.log("Total Amount:"+totalAmount);
 const Dispatch=useDispatch();


const onClickPlaceOrder=()=>{

  history.push("/paymentMode");
  

}

 return (
 
  <div>
    <table id="bodyColor" className="table">
     <div className="backgroundImage"></div>
     <div className="tableContent">
        <thead id="headColor">
        
            <th id="headID">ID</th>
            <th id="headName">Name</th>
            <th id="headPicture">Picture</th>
            <th id="headprice">Price in Rs</th>
        
        
        </thead>

        <tbody id="tBodyColor">

          { foodList.map(food=>{
           
               if(!props.updateCuisine && !props.getSearchKeyValue && !props.cartItems){

                return (
                 
                      <tr id={food.id}>
                             <td>{food.id}</td>
                             <td>{food.title}<p>{food.description}</p></td>
                             <td id="img"><img src={food.source} height="200px" width="200px"/></td>
                             <td>{food.price}</td>
                             <td onClick={()=>{Dispatch(arrayForCartAction(food.id));Dispatch(increaseCartAction());Dispatch(priceCalculationAction(food.price))}}><button>Cart</button></td>

                         </tr>
                 
                )
                    
            }
            
//Category based Food     
 else if(props.updateCuisine===food.catogory){
     
    
    return (
    
          <tr id={food.id}>
                 <td>{food.id}</td>
                 <td>{food.title}<p>{food.description}</p></td>
                 <td ><img src={food.source} height="200px" width="200px"/></td>
                 <td>{food.price}</td>
                 <td onClick={()=>{Dispatch(arrayForCartAction(food.id));Dispatch(increaseCartAction());Dispatch(priceCalculationAction(food.price))}}><button>Cart</button></td>
             </tr>
    )
        
}

//Search

  else if(props.getSearchKeyValue==food.id||props.getSearchKeyValue==food.title){

  return (
  
        <tr id={food.id}>
               <td>{food.id}</td>
               <td>{food.title}<p>{food.description}</p></td>
               <td><img src={food.source} height="200px" width="200px"/></td>
               <td>{food.price}</td>
               <td onClick={()=>{Dispatch(arrayForCartAction(food.id));Dispatch(increaseCartAction());Dispatch(priceCalculationAction(food.price));}}><button>Cart</button></td>
         </tr>
  )
      
  }

  //Cart

   else if(props.cartItems===true){

    const arrayObject=Object.values(arrayRedux);

   //console.log(arrayObject);

  

   const  someValue=arrayObject[0];  
   //console.log("someValue:"+someValue);

for(var i=0;i<arrayObject.length;i++){

 //console.log("arrayObject[i]:"+arrayObject[i]);

 
 if(arrayObject[i]==food.id){
  

      return (
              <tr id={food.id}>
                  <td>{food.id}</td>
                  <td>{food.title}<p>{food.description}</p></td>
                  <td><img src={food.source} height="200px" width="200px"/></td>
                  <td>{food.price}</td>
                  <td><button onClick={ ()=>{Dispatch(deleteArrayAction(food.id));Dispatch(reducecCartAction());Dispatch(decreasePriceCalculation(food.price))}}>-</button></td>
                  <td>{arrayObject.filter(a=> a==arrayObject[i]).length}</td>
                  <td><button onClick={ ()=>{Dispatch(incrementArrayAction(food.id));Dispatch(increaseCartAction());Dispatch(priceCalculationAction(food.price))}}>+</button></td>

              </tr>

                    
           )
      }} 
    }




  })}
        </tbody>
        </div>
        </table>
<div>
 
                 { props.cartItems && cartValueUpdate ? 
                   
                      <div id="priceDetails">
                       <h3 id="billDetails">Billing Details</h3>
                        <p id="charges">Item Total:{totalAmount}</p>
                        <p id="deliveryCharges">Delivery Charge:35</p>
                        <p id="totalAmount">Grand Amount:{totalAmount+35}</p>
                        <button id="btn_placeOrder" onClick={onClickPlaceOrder}>Place Order</button>

                    </div>: null}
    )
                     
    </div>

 </div>)

}




export default FoodItemListFunctionalComponent;





