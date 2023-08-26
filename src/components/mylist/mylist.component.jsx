import Task from "../task/task.component";

const MyList = ({task}) => {

    return (
        <div>
            <h1>My Todo List</h1>        
                <Task task={task}/>          
        </div>    
    )
}

export default MyList;