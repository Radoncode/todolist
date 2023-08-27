import Task from "../task/task.component";

const MyList = ({tasks}) => {

    return (
        <div>
            <h1>My Todo List</h1>        
                <Task tasks={tasks}/>          
        </div>    
    )
}

export default MyList;