
const DEL = 'DEL'
const ADD = 'ADD'
const GET = 'GET'

const elList = function (state, action) {
    if(!state) {
        state = []
    }
    switch (action.type) {
        case ADD:
            return [...state,action.payload]
            break;
        case DEL: 
            console.log(action);
            state.splice(action.payload,1)
            console.log(state);
            return [...state]
            break;
        default:
            return state
            break;
    }
}


export default elList

export const add=(e)=>{
    return {type: ADD,payload: e}
}
export const del=(i)=>{
    return {type: DEL,payload: i}
}
export const get=()=>{
    return {type: GET}
}