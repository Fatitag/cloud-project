
const initialState={numero:0,color:'yellow'}

function Reducer1(state=initialState,action){
    switch(action.type){
        case 'Augmanter':return {...state,numero:state.numero+1}
        case 'Decrease':return {...state,numero:state.numero-1}
        default:
    }

    return state

}

export default Reducer1

