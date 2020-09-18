import React,{useState} from 'react';
import LogoImage from '../Images/GImage1.jpg';
import {Link,useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';  
import DefaultArrayCartAction from '../menu/Redux/Action/defaultArrayCartAction';
import DefaultCartUpdateValue from '../menu/Redux/Action/DefaultCartUpdateValue';
import defultPriceAction from '../menu/Redux/Action/defultPriceAction';
import defaultPricetAction from '../menu/Redux/Action/defultPriceAction';


const ModeOfPayment=()=>{

    var cardNumber=0;
    var cardEndDate=null;
    var cvv=0;


    const [cashDeliveryClicked,setCashDeliveryClicked]=useState(false);
    const [cardDeliveryClicked,setCardDeliveryClicked]=useState(false);
    const [placeOrderClicked,setPlaceOrderClicked]=useState(false);
    const [cardPaymentClicked,setCardPaymentClicked]=useState(false);
    const[statusCash,setStatusCash]=useState(0);
    const[statusCard,setStatusCard]=useState(0);

    const Dispatch=useDispatch();


    const history=useHistory();



    const onChangeCardNumber=(event)=>{
      
        cardNumber=event.target.value;

    }

    const onChangeEndingDate=(event)=>{

       cardEndDate=event.target.value;

    }

    const onChangeCVV=(event)=>{

       cvv=event.target.value;

    }

   const onClickHandlerHome=()=>{

        history.push('/Home')  

   }

   const onClickHandlerLogout=()=>{

     history.push('/')  


   }

   const onClickHandlerCash=()=>{

    setPlaceOrderClicked(false);
    setCardDeliveryClicked(false);
    setCashDeliveryClicked(true);


   }

   const onClickHandlerCard=()=>{

    setPlaceOrderClicked(false);
    setCashDeliveryClicked(false);
    setCardDeliveryClicked(true);


   }

   const onClickHandlerPayCash=()=>{

    setPlaceOrderClicked(true);



     fetch("https://localhost:44386/api/LoginAndRegister/postOrder",{
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
               PaymentMode:'cash',
          })
          
          
          
     }).then(result=>result.json()).then(result=>{
          console.log("result:"+result);
          if(result>0)
               {
                    console.log("result:"+result);
                    setStatusCash(result);
               }
               else{
                    console.log("result:"+result);
                    setStatusCash("Order not Placed");


               }
          }


          )


   }

   const onClickHandlerCardPayment=()=>{
     setCardPaymentClicked(true);

               if(cardNumber.toString().length==10 && cardEndDate.length==5 && cvv.toString().length==3)
                 {

                    fetch('https://localhost:44386/api/LoginAndRegister/postOrder',{
                         method:"POST",
                         headers:{'Content-Type':'application/json'},
                         body:JSON.stringify({
                              PaymentMode:"card",
                              CardNumber:cardNumber,
                              CardEndDate:cardEndDate,
                              CVV:cvv
                         })
                    }).then(value=>value.json()).then(value=>{
                         if(value>0){
                              setStatusCard(value);
                         }
                         else{
                              setStatusCard("Order not Placed");

                         }
                    })

                }
                else{
                    setStatusCard("Order not Placed");

                }

   }


   var i = 0;
   function change() {
      var doc = document.getElementById("logo");
    
   var color = ["#990026", "#990073", "#4d0099","#007399","#4d9900","#997300","#994d00"];
  
  
  //  doc.style.borderStyle="dotted";
  
  
     doc.style.borderColor = color[i];
  
    
    //  doc.style.background = color[i];
  
     i = (i + 1) % color.length;
   }
   setInterval(change, 1000);


    return (
        <div>
             <div id="HeaderColor">
           <nav id="navColor" className="navbar navbar-expand-lg navbar-primary ">           
                <ul class="navbar-nav">
                       

                     <li  class="nav-item active"  ><span height="40px" width="40px" onClick={onClickHandlerHome} id="one"><img id="logo"  src={LogoImage}/>FoodOrder </span> </li>  
                </ul>
                <div >
                
               </div>
               <ul class="form-inline my-2 my-lg-0 list-unstyled">
                              {/* <li id="navColour" class="nav-link navbar-light" onClick={onClickHandlerCart}>Cart({selector})</li> */}
                              {/* <Link to="/">LOGOUT</Link> */}
                              <Link id="navColour" class="nav-link navbar-light" onClick={()=>{onClickHandlerLogout();Dispatch(DefaultArrayCartAction());Dispatch(DefaultCartUpdateValue());Dispatch(defaultPricetAction())}} exact strict to="/">LOGOUT <span class="sr-only">LOGOUT</span></Link>
                     </ul> 
           </nav>
               
   
        </div>
                <div className="paymentModeBackgroundImage"></div>

                <div id="paymentMode" className="container">
                    { !placeOrderClicked || cashDeliveryClicked ?
                         <div>
                                    <p></p>
                                    <h3 id="headingPayment">Enter the mode of Payment</h3>
                                    <p></p>
                                    <div id="lbl_radio">
                                       <label >  <input type="radio" name="paymentMode" onClick={onClickHandlerCash}/> Cash onDelivery </label>
                                       <p></p>
                                       <label >  <input type="radio" name="paymentMode" onClick={onClickHandlerCard}/> Card Payment</label>
                                    </div>
                                    <p></p>
                                    <button id="btn_pay" onClick={onClickHandlerPayCash}>Proceed to pay</button>
                                    {cashDeliveryClicked && placeOrderClicked ? 
                                    <div>
                                         <p></p>
                                         <label id="lbl_pay">Status:Order Placed  OrdreID:{statusCash}</label>
                                    </div>
                                    :null}
                         </div>

                                    : cardDeliveryClicked && placeOrderClicked ?
                                    
                                    <div>

                                        <h3 id="headingPaymentCard">Enter the Card Details(Dummy)</h3>
                                        <p></p>
                                        <div id="lbl_card">
                                                    <p></p>
                                                    <label>Card Number : <input type="text" id="txt_cardNumber" onChange={onChangeCardNumber} placeholder="10 Digit Number"/></label>
                                                    <p></p>
                                                    <label>Card Ending Date : <input type="text" id="date" onChange={onChangeEndingDate} placeholder="mm/yy"/></label>
                                                    <p></p>
                                                    <label>CVV : <input type="text" id="cvv" onChange={onChangeCVV} placeholder="3 Digit Number"/></label>
                                        </div>

                                        <button id="btn_pay_card" onClick={onClickHandlerCardPayment}>Place Order</button>
                                        <p></p>
                                        { cardPaymentClicked ?
                                                <label id="lbl_pay">Status:Order Palced Order ID:{statusCard}</label>
                                        :null}
                                    </div>
                                    
                                   : null }
        </div>
        </div>
    )
}


export default ModeOfPayment;