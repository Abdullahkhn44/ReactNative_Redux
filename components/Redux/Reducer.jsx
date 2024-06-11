const InitialState={
    cart:[]
}

const Reducer=(state=InitialState,action)=>{
    switch (action.type) {
        case 'AddToCart':
            return {...state,cart:[...state.cart,{...action.payload,quantity:1}]} 
            
          
    
        default:
            return state
    }
}
export default Reducer