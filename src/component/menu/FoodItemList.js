import React,{Component} from 'react';
import { foodList } from '../../utils/constants';
import { cuisines } from '../../utils/constants';
import Cart from './Cart'


class FoodItemList extends Component{
  
    
    
      state = {
        prevCart:0,
        array:[]
     }


     

   
   clickHandler=(foodId)=>()=>{
    
    // console.log("Value of state before setState:"+this.state.prevCart);
    
     this.setState({prevCart:++this.state.prevCart,array:[...this.state.array,foodId]});

    alert("this.state.prevcart"+this.state.prevCart);
    alert("Array in FoodItemList:"+this.state.array);


      if(this.props.cartValueUpdate)
      {
            // console.log("Value of state:"+this.state.prevCart);
            this.props.cartValueUpdate(this.state.prevCart);
      }

    
            
      //  this.setState({array:[...this.state.array,foodId]},function(){alert("this.state.array:"+this.state.array)});
      //   alert("Array in FoodItemList:"+this.state.array);

         if(this.props.foodItemsAddedToCart)
         
         {
               this.props.foodItemsAddedToCart(this.state.array);
         }




        //  console.log("this.state.prevCart from foodList:"+this.state.prevCart);

        // if(Cart){
        //     console.log("FoodID2 from foodList:"+foodId);
        //     this.props.foodListInCart(foodId);  
        // }
       // this.setState(({prevCart}) => ({prevCart: (this.state.prevCart + 1)}));
}


  render(){

 return (
<div>
<p id="backgroundImage">Lorem</p>

    <table id="bodyColor" className="table">

    
    <div class="tableContent">

        <thead id="headColor">
        
            <th>ID</th>
            <th >Name</th>
            <th>Picture</th>
            <th>Price in Rs</th>
         
         
        </thead>

        <tbody id="tBodyColor">

          { foodList.map(food=>{
              console.log()
               if(!this.props.updateCuisine && !this.props.getSearchKeyValue){
                //  alert("Value of updateCuisine from FoodItemList !this.props.updateCuisine && !this.props.getSearchKeyValue");

                return (
                 

                      <tr id={food.id}>
                             <td>{food.id}</td>
                             <td>{food.title}<p>{food.description}</p></td>
                             <td id="img"><img src={food.source} height="200px" width="200px"/></td>
                             <td>{food.price}</td>
                              <td onClick={this.clickHandler(food.id)}><button>Cart</button></td>

                         </tr>
                 
                )
                    
            }
            
     
              else if(this.props.updateCuisine===food.catogory){
     
                       // alert("Value of updateCuisine from FoodItemList:"+food.id+" "+food.title+" "+food.catogory);
    
                  return (
    
                        <tr id={food.id}>
                              <td>{food.id}</td>
                              <td>{food.title}<p>{food.description}</p></td>
                              <td ><img src={food.source} height="200px" width="200px"/></td>
                              <td>{food.price}</td>
                              <td onClick={this.clickHandler(food.id)}><button>Cart</button></td>
                              </tr>
                            )
        
                    }



            else if(this.props.getSearchKeyValue==food.id||this.props.getSearchKeyValue==food.title){
            //  alert("Value of Search Key from FoodItemList:"+food.id+" "+food.title+" "+food.catogory);

            return (
            
                  <tr id={food.id}>
                  {/* <h1>{this.props.getSearchKeyValue}</h1> */}
                        <td>{food.id}</td>
                        <td>{food.title}<p>{food.description}</p></td>
                        <td><img src={food.source} height="200px" width="200px"/></td>
                        <td>{food.price}</td>
                        <td onClick={this.clickHandler(food.id)}><button>Cart</button></td>           
                  </tr>
            )
                  
            }
  // else if(this.props.food===food.id){
  //   // console.log("Value of foodListInValue from FoodItemList:"+food.id+" "+food.title+" "+food.catogory);
  
  //   return (
    
  //         <tr id={food.id}>
  //           {/* <h1>{this.props.getSearchKeyValue}</h1> */}
  //                <td>{food.id}</td>
  //                <td>{food.title}<p>{food.description}</p></td>
  //                <td><img src={food.source} height="200px" width="200px"/></td>
  //                <td>{food.price}</td>
  //   <td><button onClick={this.clickHandler(food.id)}>Cart</button></td>
  //            </tr>
  //   )
        
  //   }
  })}
        </tbody>
        </div>
        </table>
 </div>)
}
}
export default FoodItemList;





// else if(!this.props.getSearchKeyValue){
//   return (
  
//         <tr id={food.id}>
//                <td>{food.id}</td>
//                <td>{food.title}<p>{food.description}</p></td>
//                <td
//                ><img src={food.source} height="200px" width="200px"/></td>
//                <td>{food.price}</td>
//                <td><button>Cart</button></td>
//            </tr>
//   )
      
// }


// else if(this.props.getSearchKeyValue===food.id || this.props.getSearchKeyValue===food.title){
// return (

//       <tr id={food.id}>
//              <td>{food.id}</td>
//              <td>{food.title}<p>{food.description}</p></td>
//              <td
//              ><img src={food.source} height="200px" width="200px"/></td>
//              <td>{food.price}</td>
//              <td><button>Cart</button></td>
//          </tr>
// )
    
// }