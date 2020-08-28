import React, {useState,useEffect} from 'react';
import Header from './Header';
import FoodItemListFunctionalComponent from './FoodItemListFunctionalComponent';


const MenuMain = (props) => {
    const [selectedCuisine, setselectedCuisine] = useState(false);
    const [searchItem,setsearchItem]=useState(false);
    const [cart,setCartCount]=useState(false);
    const [foodInCart,setFoodInCart]=useState([]);
    const [cartItems,setCartItems]=useState(false);

    const updateCuisine = (item) => {
          setselectedCuisine(item);

    }
          
          useEffect(() => {
                
       }, [selectedCuisine])



    const getSearchKeyValue=(searchKey)=>{
          setsearchItem(searchKey);

    }

    useEffect(() => {
           
 }, [searchItem])


    const cartValueUpdate=(value)=>{
      if(value){
      }
      setCartCount(value);
      
      



    }


    useEffect(() => {
},[cart])




    const foodItemsAddedToCart=(CartItems)=>{

      setFoodInCart([CartItems]);  

           
    }


    useEffect(() => { 

},[foodInCart])




const cartValueFromHeader=(headerValue)=>{
   setCartItems(headerValue);

   
 }
 useEffect(() => {
},[cartItems])



  
 
return(
  
  <div>
  <Header  updateCuisine={updateCuisine} getSearchKeyValue={getSearchKeyValue} cartValue={cart} cartValueFromHeader={cartValueFromHeader}/>
  <FoodItemListFunctionalComponent updateCuisine={selectedCuisine}  getSearchKeyValue={searchItem} cartValueUpdate={cartValueUpdate}  foodItemsAddedToCart={foodItemsAddedToCart} foodInCart={foodInCart}  cartItems={cartItems}    />
</div>  
  

  )
} 
          
              

          
              
        
    


export default MenuMain;

