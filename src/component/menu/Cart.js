import  React,{useState, useEffect} from 'react'
import Header from './Header'
import FoodItemListFunctionalComponent from './FoodItemListFunctionalComponent'
import { Route } from 'react-router-dom';
import {useSelector} from 'redux';


 const Cart=(props)=>{
     

    const [selectedCuisine, setselectedCuisine] = useState(false);
    const [searchItem,setsearchItem]=useState(false);
    const [cart,setCartCount]=useState(false);
    const [cartFoodList,setCartFooodList]=useState(false);

     


    const updateCuisine = (item) => {
                  // alert("item in mainmenu:"+item);
                  setselectedCuisine(item); 
                  // alert("selectedCuisine in mainmenu:"+selectedCuisine);
  
                }

    const getSearchKeyValue=(searchKey)=>{
          setsearchItem(searchKey);
    }

    // const cartValueUpdate=(value)=>{
    //   // alert("value in mainmenu:"+value);
    //   setCartCount(value);
    //   // alert("Cart value in mainmenu:"+cart);

    // }

    const foodListInCart=(itemsValue)=>{
    //console.log("items Value in Cart:"+props.itemsValue);
       setCartFooodList(props.itemsValue);
    }

   

 useEffect(()=>{
  //console.log("cartFoodList1 in useEffct in cart:"+cartFoodList);

 },[cartFoodList])

console.log(props.aCart);

        return (
            <div>
            
              <Header updateCuisine={updateCuisine} getSearchKeyValue={getSearchKeyValue} foodListInCart={foodListInCart} />
              <FoodItemListFunctionalComponent   foodListInCart={foodListInCart} />
                
            </div>
        )
    
}



export default Cart
