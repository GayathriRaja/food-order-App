const priceCalculationAction=(pricevalue)=>{
    return {
        type:"priceAmount",
        parameter:pricevalue
    }
}

export default priceCalculationAction;