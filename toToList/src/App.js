import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import AddNewItemForm from "./components/AddNewItemForm";
import {connect} from "react-redux";
import {ADD_TODOLIST, addTodoListAC} from "./reducers/reducer";

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    nextTodoId = 0;

    // componentDidMount() {
    //     this.restoreState()
    // }
    //
    // nextTodoId = 0;
    //
    // saveState = () => {
    //     //переводим обьект в строку
    //     let stateAsString = JSON.stringify(this.state);
    //     //сохраняем нашу строку localStorage под ключом 'our-state'
    //     localStorage.setItem('our-stateTodo', stateAsString)
    // };
    //
    // restoreState = () => {
    //     let state = {
    //         todoLists: []
    //     };
    //
    //     //считываеи сохранненую строку с localStorage
    //     let stateAsString = localStorage.getItem('our-stateTodo');
    //
    //     //а вдуг не было еще не одного сохранения?? тогда будет null.
    //     //если не null тогда строку превращаем а обьект
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString)
    //     }
    //
    //     this.setState(state, () => {
    //             this.state.todoLists.forEach(t => {
    //                 if (t.id >= this.nextTodoId) {
    //                     this.nextTodoId = t.id + 1
    //                 }
    //             })
    //         }
    //     )
    // };


    // state = {
    //     todoLists: [
    //         // {id: 1, titleTodo: 'First todo'},
    //         // {id: 2, titleTodo: 'Second todo'}
    //     ]
    // };


//     addTodoList = (newTextTodo) => {
//         // addTask = (newText) =>
//         // let newText = this.newTaskTitleRef.current.value;
//         // this.newTaskTitleRef.current.value = '';
//
//         let newTodoItem = {
//             id: this.nextTodoId,
//             titleTodo: newTextTodo
//         };
//
//         this.nextTodoId++;
//         let newTodoItems = [...this.state.todoLists, newTodoItem];
//
//         this.setState({
//             todoLists: newTodoItem
//         })
// // ,() => {this.saveState()});
//     };

    addTodoList =(newTextTodoList)=> {
        let newTodoItem = {
            id: this.nextTodoId ,
            titleTodo: newTextTodoList,
            tasks:[]
        };
        this.nextTodoId++;
        this.props.addTodoList(newTodoItem)
    };


    render = () => {

        let elementTodo = this.props.todoLists.map(todo =>

            <TodoList id={todo.id}
                      titleTodo={todo.titleTodo}
                      tasks={todo.tasks}
            />);

        return (
            <div className="App">
                <AddNewItemForm addItem={this.addTodoList}/>
                {elementTodo}
            </div>
        );
    }
}

//export default App;

const mapStateToProps = (state) => {

    return {
        todoLists: state.todoLists
    }

};

const mapDispatchToProps = (dispatch) => {

    return{
        addTodoList:(newTodoList) => {
            const action = addTodoListAC(newTodoList);
            dispatch(action)
        }
    }
};


const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);


export default ConnectedApp;

// const mapDispatchToProps = (dispatch) => {
//
//     return{
//         addTodoList:(newTodoList) => {
//             const action = {
//                 type: ADD_TODOLIST,
//                 newTodoList: newTodoList   // this.props.addTodoList(newTodoItem === newTodoList)
//             };
//             dispatch(action)
//         }
//     }
// };