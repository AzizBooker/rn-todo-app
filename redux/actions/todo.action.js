

export const addTodo=(note)=>({
    type:'todo/add',
    payload:note
})


export const removeTodo=(id)=>({
    type:"todo/remove",
    payload:id
})