import Toast from 'react-bootstrap/Toast';

const Task = ({tasks}) => {
   console.log(tasks);
    return (
        <div>
        {
            tasks ? tasks.map((task, index) => <Toast
            className="mx-auto m-1"
            bg={{variant: 'dark'}}
            key={index}
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Validate</strong>
            </Toast.Header>
            <Toast.Body className={'Dark'}>
                {task}
            </Toast.Body>
          </Toast>) : <li></li>
        }
        </div>     
    )
}

export default Task;