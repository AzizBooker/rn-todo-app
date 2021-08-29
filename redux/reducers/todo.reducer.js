
const INITIAL_STATE={
    todos:[],
    
}

const todoReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "task/add":
            
            return{
                ...state,
                todos:[
                    ...state.todos,
                    action.payload
                ]
            }
            break;
        case "task/remove":
            console.log("todo/remove")
            return {...state}
        break;
        default:
        return{...state}
        break;
    }

}


export default todoReducer;