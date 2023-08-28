import './App.css';
import MyForm from './components/myform/myform.component';
import MyList from './components/mylist/mylist.component';
import { useState } from 'react';

function App() {

  console.log('render');
  const [value, setValue] = useState('');
  const [tasks , setTasks] = useState([]);

  // build the word each time we type
  const handleChange = (event) => {
      const taskString = event.target.value;
      setValue(taskString);       
  }
  console.log(tasks);
  // when we press the button we fill the array and empty the input
  const handleClick = () => {
      tasks.push(value);
      setTasks(tasks);
      setValue('');
  }
  //this function allows us to get an array without the task that is selected
  const handleClose = (task) => {
    setTasks(tasks.filter(elem => elem !== task));
  }

  return (
    <div className="App">
        <MyForm handleChange={handleChange} handleClick={handleClick} value={value}/>
        <MyList tasks={tasks}  handleClose={handleClose} />
    </div>
  );
}

export default App;
