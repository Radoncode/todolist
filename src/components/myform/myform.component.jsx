import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";

const MyForm = (props) => {
    
const { handleChange, handleClick } = props;

 return (
        <Form>
                <h1>My task</h1>
                <Row>
                <Col lg="2"  className="mx-auto" >
                    <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Add your task here !"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    
                    />
                    </InputGroup>
                    <Button variant="info" id="button-addon2"  onClick={handleClick}>
                    Click here for adding a task!
                    </Button>
                </Col>       
                </Row>               
        </Form>
    )
}

export default MyForm;