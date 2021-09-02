import Task from "../../models/task.model";
import Priority from "../../enums/priority.enum";
const INITIAL_STATE={
    todos:[
        new Task('First Task!','Check This first task!',Priority.p1),
        
    
    ],
    visible:true
    
}

const todoReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "task/add":
            console.log('Dispatch Payload:',action.payload)
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
        case "modal/toggleVisible":
        return{
            ...state,
            visible:!state.visible
        }
        break;
        default:
        return{...state}
        break;
    }

}


export default todoReducer;