import './App.css';
import MyForm from './components/myform/myform.component';
import MyList from './components/mylist/mylist.component';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState('');
  const [task , setTask] = useState('');

  
  const handleChange = (event) => {
      const taskString = event.target.value;
      setValue(taskString);       
  }

  const handleClick = () => {
      setTask(value);
  }
  return (
    <div className="App">
        <MyForm handleChange={handleChange} handleClick={handleClick}/>
        <MyList task={task} />
    </div>
  );
}

export default App;
