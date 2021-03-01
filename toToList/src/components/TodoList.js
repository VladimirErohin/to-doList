import React from 'react';
import '../App.css';
import TodoListTasks from "../components/TodoListTasks";
import TodoListFooter from "../components/TodoListFooter";
import AddNewItemForm from "./AddNewItemForm";
import TodoListTitle from "./TodoListTitle";
import {connect} from "react-redux";
import {
    ADD_TASK,
    addTaskAC,
    DELETE_TASK,
    deleteTaskAC,
    DELETE_TODO,
    deleteTodoAC,
    UPDATE_TASK,
    updateTaskAC
} from "../reducers/reducer";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        //this.newTaskTitleRef = React.createRef();
    }

    // componentDidMount() {
    //     this.restoreState()
    // }
    //
    // nextTaskId = 0;
    //
    // saveState = () => {
    //     //переводим обьект в строку
    //     let stateAsString = JSON.stringify(this.state);
    //     //сохраняем нашу строку localStorage под ключом 'our-state'
    //     localStorage.setItem('our-state-' + this.props.id, stateAsString)
    // };
    //
    // restoreState = () => {
    //     let state = {
    //         tasks: [],
    //         filterValue: 'All'
    //     };
    //
    //     //считываеи сохранненую строку с localStorage
    //     let stateAsString = localStorage.getItem('our-state-' + this.props.id);
    //
    //     //а вдуг не было еще не одного сохранения?? тогда будет null.
    //     //если не null тогда строку превращаем а обьект
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString)
    //     }
    //
    //     this.setState(state, ()=>{
    //             this.state.tasks.forEach(t=>{
    //                 if(t.id >= this.nextTaskId){
    //                     this.nextTaskId = t.id + 1
    //                 }
    //             })
    //         }
    //
    //     )
    // };

    // state = {
    //     tasks: [
    //         // {id: 1, title: "JS", isDone: false, priority: "low"},
    //         // {id: 2, title: "HTML", isDone: false, priority: "medium"},
    //         // {id: 3, title: "CSS", isDone: false, priority: "high"},
    //         // {id: 4, title: "React", isDone: false, priority: "low"}
    //
    //     ],
    //     filterValue: " "
    //
    // };

    nextTaskId = 0;
    state = {
        filterValue: "All"
    };

    addItem = (newText) => {
        // addTask = (newText) =>
        // let newText = this.newTaskTitleRef.current.value;
        // this.newTaskTitleRef.current.value = '';

        let newTask = {
            id: (new Date()).getTime(),
            title: newText,
            isDone: true,
            priority: "low"
        };

        // this.nextTaskId++;
        // let newTasks = [...this.state.tasks, newTask];
        //
        // this.setState({
        //     tasks: newTasks
        //
        // }, () => {
        //     this.saveState()
        // });
        this.props.addTask(newTask, this.props.id)

    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
        //, () => {this.saveState();})
    };

    changeTasks = (taskId, obj) => {

        // let newTasks = this.props.tasks.map(t => {
        //         if (t.id !== taskId) {
        //             return t
        //         } else {
        //             return {...t, ...obj}
        //         }
        //     }
        // );
        //
        // this.setState({
        //     tasks: newTasks
        //
        // }
        // , () => {this.saveState()});
        this.props.updateTask(taskId, obj, this.props.id)
    };

    changeStatus = (taskId, isDone) => {
        this.changeTasks(taskId, {isDone: isDone});
    };

    changeTitle = (taskId, newTitle) => {
        this.changeTasks(taskId, {title: newTitle});
    };

    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
    };

    deleteTask = (taskId)=>{
        this.props.deleteTask(taskId, this.props.id)
    };


    render = () => {
        // let {tasks=[]}=this.props

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListTitle
                        id={this.props.id}
                        deleteTodo={this.deleteTodo}
                        titleTodo={this.props.titleTodo}/>
                    <AddNewItemForm addItem={this.addItem}/>
                    <TodoListTasks
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        deleteTask={this.deleteTask}
                        tasks={this.props.tasks.filter(t => {
                            switch (this.state.filterValue) {

                                case 'All':
                                    return true;

                                case 'Active':
                                    return t.isDone === false;

                                case 'Completed':
                                    return t.isDone === true

                            }

                        })}/>
                    <TodoListFooter
                        changeFilter={this.changeFilter}
                        filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

//export default TodoList;


const mdtp = (dispatch) => {

    return {
        addTask(newTask, todoListId) {
            const action = addTaskAC(newTask, todoListId);
            dispatch(action)
        },
        updateTask(taskId, obj, todoListId) {
            const action = updateTaskAC(taskId, obj, todoListId);
            dispatch(action)
        },
        deleteTodo(todoListId) {
            const action = deleteTodoAC(todoListId);
            dispatch(action)
        },
        deleteTask(taskId, todoListId){
            const action=deleteTaskAC(todoListId, taskId);
            dispatch(action)
        }

    }


};

const ConnectedTodoList = connect(null, mdtp)(TodoList);
export default ConnectedTodoList;


// if(this.state.filterValue === "All"){
//     return true
// }else if (this.state.filterValue === "Active"){
//     return t.isDone === false
// }else if (this.state.filterValue === "Completed"){
//     return t.isDone === true
// }else{return  false}


/*<div className="todoList-header">
    <h3 className="todoList-header__title">What to Learn</h3>
    <div className="todoList-newTaskForm">
        <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
        <button onClick={() => {
            this.onAddTaskClick()
        }}>Add
        </button>
    </div>
</div>*/

// changeStatus = (taskId, isDone) => {
//
//     let newTasks = this.state.tasks.map(t => {
//             if (t.id !== taskId) {
//                 return t
//             } else {
//                 return {...t, isDone: isDone}
//             }
//         }
//     );
//
//     this.setState({
//         tasks: newTasks
//     })
// };
