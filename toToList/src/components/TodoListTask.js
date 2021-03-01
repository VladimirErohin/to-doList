import React from 'react';

class TodoListTask extends React.Component {


    state = {
        editMode: false
    };


    onIsDoneChange = (e) => {
        //alert(e.currentTarget.value)
        //
        let newStatus = e.currentTarget.checked;
        // this.props.changeStatus(this.props.task,newStatus)

        this.props.changeStatus(this.props.task.id, newStatus);
    };

    onTitleChanged=(e)=>{
        let newTitle = e.currentTarget.value;

        this.props.changeTitle(this.props.task.id, newTitle)
    };

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    };
    onDeleteTask =()=>{
       this.props.deleteTask(this.props.task.id)
    };


    render = () => {
        let classForTask = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={classForTask}>
                <input type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChange}/>
                {this.state.editMode
                    ? <input onChange={this.onTitleChanged} onBlur={this.deactivateEditMode} autoFocus={true} value={this.props.task.title}/>
                    : <span onClick={this.activeEditMode}>{this.props.task.id}, {this.props.task.title}</span>
                } , priority:{this.props.task.priority}<button onClick={this.onDeleteTask}>X</button>
            </div>
        )
    }

}

export default TodoListTask;