import './App.css';
import MyForm from './components/myform/myform.component';
import MyList from './components/mylist/mylist.component';
import { useState } from 'react';

function App() {

  console.log('render');
  const [value, setValue] = useState('');
  const [task , setTask] = useState([]);

  const handleChange = (event) => {
      const taskString = event.target.value;
      setValue(taskString);       
  }
  console.log(task);
  const handleClick = () => {
      task.push(value);
      setTask(task);
      setValue('');
  }

  return (
    <div className="App">
        <MyForm handleChange={handleChange} handleClick={handleClick} value={value}/>
        <MyList tasks={task} />
    </div>
  );
}

export default App;
