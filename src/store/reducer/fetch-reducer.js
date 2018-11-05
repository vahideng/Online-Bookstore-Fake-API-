


const reducer= (state=[], action )=>{
    switch ( action.type ) {
        case "PURCHASE_INIT": return  [...state];
        default : return [...state]
    }

  
}

export default reducer;