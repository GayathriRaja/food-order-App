import React, { useState,useEffect } from 'react';
import { foodList } from '../../utils/constants';
// import { cuisines } from '../../utils/constants';
// import Cart from './Cart';

import increaseCartAction from './Redux/Action/increaseCartAction';
import arrayForCartAction from './Redux/Action/arrayForCartAction';
import deleteArrayAction from './Redux/Action/deleteArrayAction';
import reducecCartAction from './Redux/Action/reducecCartAction';



import {useDispatch,useSelector} from 'react-redux';  


const FoodItemListFunctionalComponent=(props)=>{ 

 


 const cartValueUpdate=useSelector(state=>state.updateCart); 
 const arrayRedux=useSelector(state=>state.cartArray);
 const Dispatch=useDispatch();


 



 return (
 
  <div>
    <table id="bodyColor" className="table">
     <div className="backgroundImage"></div>
     <div className="tableContent">
        <thead id="headColor">
        
            <th>ID</th>
            <th >Name</th>
            <th>Picture</th>
            <th>Price in Rs</th>
        
        
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
                             <td onClick={()=>{Dispatch(arrayForCartAction(food.id));Dispatch(increaseCartAction());}}><button>Cart</button></td>

                         </tr>
                 
                )
                    
            }
            
     
 else if(props.updateCuisine===food.catogory){
     
    
    return (
    
          <tr id={food.id}>
                 <td>{food.id}</td>
                 <td>{food.title}<p>{food.description}</p></td>
                 <td ><img src={food.source} height="200px" width="200px"/></td>
                 <td>{food.price}</td>
                 <td onClick={()=>{Dispatch(arrayForCartAction(food.id));Dispatch(increaseCartAction());}}><button>Cart</button></td>
             </tr>
    )
        
}



  else if(props.getSearchKeyValue==food.id||props.getSearchKeyValue==food.title){

  return (
  
        <tr id={food.id}>
               <td>{food.id}</td>
               <td>{food.title}<p>{food.description}</p></td>
               <td><img src={food.source} height="200px" width="200px"/></td>
               <td>{food.price}</td>
               <td onClick={()=>{Dispatch(arrayForCartAction(food.id));Dispatch(increaseCartAction());}}><button>Cart</button></td>
         </tr>
  )
      
  }

   else if(props.cartItems===true){

    const arrayObject=Object.values(arrayRedux);

   console.log(arrayObject);

  

   const  someValue=arrayObject[0];  
   console.log("someValue:"+someValue);

for(var i=0;i<arrayObject.length;i++){

 console.log("arrayObject[i]:"+arrayObject[i]);

 
 if(arrayObject[i]==food.id){
  

      return (
          <tr id={food.id}>
                 <td>{food.id}</td>
                 <td>{food.title}<p>{food.description}</p></td>
                 <td><img src={food.source} height="200px" width="200px"/></td>
                 <td>{food.price}</td>
                 <td><button onClick={()=>{Dispatch(deleteArrayAction(food.id));Dispatch(reducecCartAction());}}>Delete</button></td>

             </tr>

           )
      }} 
    }




  })}
        </tbody>
        </div>
        </table>
 </div>)

}




export default FoodItemListFunctionalComponent;





