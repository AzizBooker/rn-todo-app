

export const addTask=(note)=>({
    type:'task/add',
    payload:note
})


export const removeTodo=(id)=>({
    type:"task/remove",
    payload:id
})