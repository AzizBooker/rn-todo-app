
const INITIAL_STATE={
    todo:[]
}

const todoReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "todo/add":
            console.log("todo/app")
            break;
        case "todo/remove":
            console.log("todo/remove")
        break;
        default:
        return{...state}
        break;
    }

}


export default todoReducer;