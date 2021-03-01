import React from "react";
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = (props) => {

        let taskElements = this.props.tasks.map(task => <TodoListTask
            task={task}
            changeStatus={this.props.changeStatus}
            changeTitle={this.props.changeTitle}
            deleteTask={this.props.deleteTask}
        />);

        return (
            <div className="todoList-tasks">
                {taskElements}
            </div>
        )
    }

};

export default TodoListTasks;

//      <TodoListTask isDone={this.props.tasks[0].isDone} title={this.props.tasks[0].title} />,
//             <TodoListTask isDone={this.props.tasks[1].isDone} title={this.props.tasks[1].title}/>,
//             <TodoListTask isDone={this.props.tasks[2].isDone} title={this.props.tasks[2].title}/>,
//             <TodoListTask isDone={this.props.tasks[3].isDone} title={this.props.tasks[3].title}/>