import React,{useState,useEffect} from 'react';
import './App.css';
import Cart from './component/menu/Cart';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import ErrorBoundary from './component/ErrorBoundary';
import MenuMain from './component/menu/MenuMain';
import Login from './component/LoginAndRegister/LoginAndRegister';
import PaymentMode from './component/PaymentBill/ModeOfPayment';

function App(props) {

  return (
    <div className="App">

{/* <Login/> */}


  <ErrorBoundary>

     <Router>
     
        <Switch>
         {/* <Redirect from="/" to="/Login" component={() => (<Login  />)}/>     */}

          <Route   path="/" exact  component={() => (<Login  />)}/>
          <Route  path="/Login" exact component={() => (<Login/> )}/>

          {/* <Route   path="/" exact  component={() => (<MenuMain  />)}/> */}

          <Route  path="/Home" exact component={() => (<MenuMain/> )}/>

          <Route  path="/paymentMode" exact component={() => (<PaymentMode/> )}/>


        </Switch>
     
     </Router> 

      </ErrorBoundary>   




    </div>
  );
}

export default App;



 /* <Redirect from="/" to="/Home"   component={MenuMain}/>   */
          /* <Route   path="/" exact  component={() => (<MenuMain getItemClickedInCart={getItemClickedInCart} />)}/> */
          /* <Route  path="/Home" exact component={() => (<MenuMain>{getItemClickedInCart}</MenuMain> )}/> */
           /* <Route  path='/Cart' exact component={Cart} /> */
