import { uniqueId } from "lodash";
import Priority from "../enums/priority.enum";
export default class Task{
    constructor(title,description,subtasks=null,priority=Priority.none) {
    this.uuid=uniqueId()
    this.title=title
    this.description=description
    this.subtasks=subtasks
    this.priority=priority
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