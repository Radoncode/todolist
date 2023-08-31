import Task from "../task/task.component";

const MyList = ({tasks, handleClose, handleCheckChange}) => {
    
    return (
        <div>       
            <Task tasks={tasks} handleClose={handleClose} handleCheckChange={handleCheckChange} />          
        </div>    
    )
}

export default MyList;