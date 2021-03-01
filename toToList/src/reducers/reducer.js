export const ADD_TODOLIST='TodoList/Reducer/ADD-TODOLIST';
export const ADD_TASK='TodoList/Reducer/ADD-TASK';
export const  UPDATE_TASK='TodoList/Reducer/UPDATE-TASK';
export const DELETE_TODO='TodoList/Reducer/DELETE_TODO';
export const DELETE_TASK='TodoList/Reducer/DELETE_TASK';

const initialState = {
    todoLists: [
        // {
        //     id: 0, titleTodo: "first ",
        //     tasks: [
        //         {id: 0, "title": "www", "isDone": true, "priority": "low"}]
        // },
        // {
        //     id: 1,
        //     titleTodo: "second",
        //     tasks: [{id: 0, "title": "jgjgjgjg", "isDone": false, "priority": "low"}]
        // },
        // {
        //     id: 2, titleTodo: "aasas", tasks: [{id: 0, "title": "rrrr", "isDone": true, "priority": "low"}
        //     ]
        // }
    ]
};

export const reducer = (state = initialState, action) => {

    console.log('reducer: ', action);

    switch (action.type) {
        case ADD_TODOLIST:
            return {
                ...state,
                todoLists: [...state.todoLists, action.newTodoList]
            };
        case ADD_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(td => {
                        if (td.id === action.todoListId) {
                            return {...td, tasks: [...td.tasks, action.newTask]}
                        } else {
                            return td
                        }
                    }
                )
            };
        case UPDATE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(td => {
                    if (td.id === action.todoListId) {
                        return {
                            ...td,
                            tasks: td.tasks.map(t => {
                                if (t.id != action.taskId) {
                                    return t
                                } else {
                                    return {...t, ...action.obj}
                                }
                            })
                        }
                    } else {
                        return td
                    }
                })
            };
        case DELETE_TODO:
            return {
                ...state,
                todoLists: state.todoLists.filter(td => {  // todolists: state.todolists.filter(td => td.id != action.todolistId) -короткая запись
                        if (td.id !== action.todoListId) {
                            return { td}
                        }
                    }
                )
            };
        case DELETE_TASK:
            return {
                ...state,
                todoLists:state.todoLists.map(td=>{
                    if(td.id === action.todoListId){
                        return{
                            ...td,
                            tasks:td.tasks.filter(t=>{
                                if(t.id !== action.taskId){
                                    return{t}
                                }
                            })
                        }
                    }else{return td}

                })
            }
    }

    return state
};

export const addTodoListAC = (newTodoList) =>{
    return{type: ADD_TODOLIST, newTodoList};
};
export const addTaskAC = (newTask, todoListId) =>{
    return{type: ADD_TASK, newTask, todoListId};
};
export const updateTaskAC = (taskId, obj, todoListId) =>{
    return{type: UPDATE_TASK, taskId, obj, todoListId};
};
export const deleteTodoAC = (todoListId) =>{
    return{type: DELETE_TODO, todoListId};
};
export const deleteTaskAC=(todoListId, taskId)=>{
    return{type: DELETE_TASK, todoListId, taskId}
}