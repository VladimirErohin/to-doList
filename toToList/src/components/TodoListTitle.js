import React from 'react';

class TodoListTitle extends React.Component {

    onDeleteTodo=()=>{
        this.props.deleteTodo(this.props.id)
    }

    render = () => {

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">{this.props.titleTodo}<button onClick={this.onDeleteTodo}>X</button></h3>
            </div>
        )
    }

}

export default TodoListTitle;