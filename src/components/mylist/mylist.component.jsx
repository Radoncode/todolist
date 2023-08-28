import Task from "../task/task.component";

const MyList = ({tasks, handleClose}) => {
    
    return (
        <div>
            <h1>My Todo List</h1>        
                <Task tasks={tasks} handleClose={handleClose} />          
        </div>    
    )
}

export default MyList;