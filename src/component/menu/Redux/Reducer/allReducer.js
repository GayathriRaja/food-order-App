 export const  updateCartReducer=(state=0,action)=>{
    switch(action.type)
    {
        case "increaseCart":
            return   state=state+1;

        case "reduceCart":
             return     state=state-1;

             case "defaultCart":
                 return state=0;

        default:
           return state
    }

}


export const  arrayForCart=(state=[],action)=>{
    switch(action.type)
    {
        case "arrayForCart":
         return (

             [...state,action.payload]
         )


         case "incrementArray":
             return(
                 [...state,action.payload]
             )

        

         case "deleteArray":
             return (
                      [state.splice(state.indexOf(action.payload),1)],
                      [...state]
             )


              case "defaultArray":
 

              return state=[];




            default:
                //console.log("default:"+state);
                return state;
    }
}


export const priceCalculationReducer=(state=0,action)=>{
    switch(action.type) {


        case "priceAmount":
            return state=state+action.parameter;
            
         
        case "decreasePrice":
            return state=state-action.payload;


        case "defaultPrice":
            return state=0;


            default:
                // console.log("action.parameter:"+action.parameter);

                return state;

    }
}