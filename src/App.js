import './App.css';
import { Container } from 'react-bootstrap';
import MyForm from './components/myform/myform.component';
import MyList from './components/mylist/mylist.component';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState('');
  const [tasks , setTasks] = useState([]);

  // build the word each time we type
  const handleChange = (event) => {
      const taskString = event.target.value;
      setValue(taskString);       
  }

  // when we press the button we fill the array and empty the input
  const handleClick = () => {
    const objectTask = {
      task: value,
      validate:false
    }

    // we check if the object that pass through the input form is empty for avoiding the empty task
    if(objectTask.task !== '' && objectTask.validate !== ''){
      tasks.push(objectTask);
      setTasks(tasks);
      setValue('');
    }  
  }

  //this function allows us to get an array without the task that is selected
  const handleClose = (item) => {
    console.log(item, tasks, item.task, item.validate)
   setTasks(tasks.filter(elem => elem !== item));
  }

  const handleCheckChange = (item) => {
    // get the item that is the value of task and change the value of validate
    const newObjectTasks = tasks.map((obj) => {
      if(obj.task === item && obj.validate === true){
        return { ...obj, validate: false}
      }
      if(obj.task === item && obj.validate === false){
        return { ...obj, validate: true}
      }
      return obj;
    })
    setTasks(newObjectTasks);
  }

  return (
    <Container>
      <h1 className='d-flex justify-content-center'>My Todo App</h1>
      <MyForm handleChange={handleChange} handleClick={handleClick} value={value}/>
      <MyList tasks={tasks}  handleClose={handleClose} handleCheckChange={handleCheckChange} />
    </Container>
  );
}

export default App;
