 export const  updateCartReducer=(state=0,action)=>{
    switch(action.type)
    {
        case "increaseCart":
            return   state=state+1;

        case "reduceCart":
             return     state=state-1;

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


         case "deleteArray":
             return (
                      [state.splice(state.indexOf(action.payload),1)],
                      [...state]
             )

            default:
                //console.log("default:"+state);
                return state;
    }
}


