import Toast from 'react-bootstrap/Toast';
import { Form } from 'react-bootstrap';
import { FaTrashCan } from  'react-icons/fa6'

const Task = ({tasks, handleClose, handleCheckChange}) => {
    console.log(tasks)
    return (
        <div>
        {
            tasks && tasks.map((item, index) => 

            <Toast
              className="mx-auto m-1"
              bg='light'
              key={index}
            >
            <Toast.Header 
              closeButton={false}
            >
            <Form.Check 
              checked={item.validate === true}
              // we propagate the function through the props to the parent app  
              onChange={() => handleCheckChange(item.task)}
            />
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">
              {item.validate === true && 'Task Finished !'}
            </strong>
            <FaTrashCan 
              style={{cursor: 'pointer', color: 'red'}} 
              className="ms-auto" onClick={() => handleClose(item)} 
            />
            </Toast.Header>
            <Toast.Body className={'Dark'}>
                {item.task}
            </Toast.Body>
          </Toast>)
        } 
        </div> 
       
    )
}

export default Task;