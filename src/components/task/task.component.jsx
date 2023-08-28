import Toast from 'react-bootstrap/Toast';

const Task = ({tasks, handleClose}) => {

    return (
        <div>
        {
            tasks && tasks.map((task, index) => <Toast
            className="mx-auto m-1"
            bg='light'
            key={index}
            onClose={() => handleClose(task)} // we propagate the function through the props to the parent app
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
          </Toast>)
        }
        </div>     
    )
}

export default Task;