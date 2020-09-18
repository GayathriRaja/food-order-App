import React,{useState} from 'react';
import LogoImage from '../Images/GImage1.jpg';
import {Redirect,Link,useHistory} from 'react-router-dom';
import Home from '../menu/MenuMain';
import MenuMain from '../menu/MenuMain';


 function LoginAndRegister(props){

    const [messageLogin, setmessageLogin] = useState("");
    const [registerMessage, setRegisterMessage] = useState("");


//   var status;
  var Email=null;
  var Password=null;

  
  var createEmail=null;
  var createFname=null;
  var CreateLname=null;
  var CreatePassword=null;
  var Address=null;


  var history=useHistory();


const getLoginEmail=(event)=>{
         Email=event.target.value;
}

const getLoginPassword=(event)=>{
         Password=event.target.value;
}


  const loginHandler=()=>{

        //   console.log("Email:"+Email);
        //   console.log("Password:"+Password);



        fetch("https://localhost:44386/api/LoginAndRegister/postLogin",
        {
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                        Email:Email,
                        Password:Password
                })
                
                
        }).then(response=>response.json()).then(result=>{
                console.log(result);
                        if(result)
                        {
                            console.log("Login");

                            return   history.push("/Home");

                        //     return   history.push("/Home'");
                            
                        //     <Redirect exact strict to="/Home"/>                   

                        }
                        else{
                                console.log("Not Login");
                                setmessageLogin("Status:Enter Valid ID or Password")
                        }
                    })

  }

  var createFname,CreateLname,createEmail,CreatePassword,CreateConfirmPassword;


  const getCreateFname=(event)=>{
          createFname=event.target.value;
  }

  const getCreateLname=(event)=>{
        CreateLname=event.target.value;
}



const getCreateEmail=(event)=>{
        createEmail=event.target.value;

}

const getCreatePwd=(event)=>{
        CreatePassword=event.target.value;
}

const getCreateAddress=(event)=>{
        Address=event.target.value;

}


  const createAccountHandler=()=>{
        fetch("https://localhost:44386/api/LoginAndRegister/postAddAccount",{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                        FirstName:createFname,
                        LastName:CreateLname,
                        Email:createEmail,
                        Password:CreatePassword,
                        Address:Address



                })
                
                
        }).then(response=>response.json()).then(result=>{
                console.log("Value:"+result);
                        if(result)
                        {
                            console.log("Account created");
                            setRegisterMessage("Status:Account Created Successfully")
                        }
                        else{
                                console.log("Account not created");
                                setRegisterMessage("Status:Account Not Created");
                        }
                        
                    })

  }


  var i = 0;
  function change() {
     var doc = document.getElementById("logo");
   
  var color = ["#990026", "#990073", "#4d0099","#007399","#4d9900","#997300","#994d00"];
 
    doc.style.borderColor = color[i];
   
//     doc.style.background = color[i];
 
    i = (i + 1) % color.length;
  }
  setInterval(change, 1000);


        return (
               <div  >
                                          <div className="loginAndRegister"></div>

                        <nav id="loginNav" className="navbar navbar-expand-lg navbar-primary ">           
                        <ul class="navbar-nav">
                       <li  class="nav-item active"  ><span height="40px" width="40px" id="one"><img id="logo"  src={LogoImage}/>FoodOrder </span> </li>  
                       </ul>
                       <div >
                       
                       </div>
                       
                        </nav>
               
                       
                        <div id="login">

                                <h2 id="headingLogin">Login</h2>
                                <p></p>
                                <label id="lbl_Email"><strong>EmailID : </strong><input onChange={getLoginEmail} type="text" id="loginid" /></label>
                                <p></p>
                                <label id="lbl_pwd"><strong>Password : </strong><input  onChange={getLoginPassword} type="text" id="pwd" /></label>

                                <p></p>

                                <button id="btn_login" onClick={loginHandler}>Login</button>

                                {
                                        messageLogin ? 
                                
                                        <p id="lbl_message_login"> <label>{messageLogin} </label></p>

                                : null}



                                {/* <Link class="nav-link navbar-light" exact strict to="/Home">Home <span class="sr-only">Home</span></Link> */}


                        </div>

                        <div id="register">

                                <h2 id="headingRegister">Register</h2>
                                <p></p>
                                <label id="lblregister"><strong>Firstname : </strong><input onChange={getCreateFname} type="text" id="fname" /></label>
                                <p></p>
                                <label id="lblregister"><strong>Lastname : </strong><input onChange={getCreateLname} type="text" id="lname" /></label>
                                <p></p>
                                <label id="lblregister"><strong>EmailID : </strong><input onChange={getCreateEmail} type="email" id="Email" placeholder="a@com" /></label>
                                <p></p>
                                <label id="lblregister"><strong>Password : </strong><input onChange={getCreatePwd} type="text" id="pwd" /></label>
                                <p></p>
                                <label id="lblregister"><strong>Address : </strong><input onChange={getCreateAddress}  type="text" id="adress" /></label>
                                <p></p>
                                <button id="btn_register" onClick={createAccountHandler}>Register</button>
                                {
                                        registerMessage ? 
                                
                                <p  id="lbl_message_register"> <label>{registerMessage} </label></p>

                                : null}

                                {/* <label>{this.state.messageLogin} </label> */}

                        </div>
                        
                </div>
        )
    
}

export default LoginAndRegister
