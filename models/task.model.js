import { uniqueId } from "lodash";
import Priority from "../enums/priority.enum";
export default class Task{
    constructor(title,description,priority,subtasks=null) {
    this.uuid=uniqueId()
    this.title=title
    this.description=description
    this.subtasks=subtasks
    this.priority=priority

    if(priority==null){
        this.priority=Priority.none
    }
    }

        addSubtasks(subtask){
            this.subtasks.push(subtask)
        }
        removeSubtasks(subtaskID){
            console.log('removeSubtasks')
        }
        changePriority(newPriority){
            this.priority=newPriority
        }
        getNumberSubtasks(){
            return subtask.length()
        }
}