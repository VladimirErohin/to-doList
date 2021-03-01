// import React from 'react';
// import TodoListTitle from "./TodoListTitle";
//
// class TodoListHeader extends React.Component {
//
//     state = {
//         error: false,
//         title: ''
//     };
//
//     onAddTaskClick = () => {
//         // let newText = this.newTaskTitleRef.current.value;
//         // this.newTaskTitleRef.current.value = '';
//
//         let newText = this.state.title;
//         this.state.title = "";
//
//         if (newText === "") {
//             this.setState({
//                 error: true
//             })
//         } else {
//             this.setState({
//                 error: false
//             });
//             //передаем новый текст наружу в App
//             this.props.addTask(newText)
//         }
//     };
//
//     onKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             this.onAddTaskClick()
//         }
//     };
//
//     onTitleChanged = (e) => {
//         //let newTitle = e.currentTarget.value;
//
//         this.setState({
//             error: false,
//             title: e.currentTarget.value
//         })
//     };
//
//     render = () => {
//
//
//         let classError = this.state.error ? "error" : '';
//
//         return (
//             <div className="todoList-header">
//                 <TodoListTitle titleTodo={this.props.titleTodo}/>
//                 <div className="todoList-newTaskForm">
//                     <input
//                         onKeyPress={this.onKeyPress}
//                         type="text"
//                         placeholder="New task name"
//                         className={classError}
//                         onChange={this.onTitleChanged}
//                         value={this.state.title}/>
//                     <button onClick={this.onAddTaskClick}>Add</button>
//                 </div>
//             </div>
//         )
//     }
//
// }
//
// export default TodoListHeader;