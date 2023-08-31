import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import { FaSquarePlus } from 'react-icons/fa6';

const MyForm = (props) => {
    
const { handleChange, handleClick, value} = props;

 return (
                <Row className="d-flex justify-content-lg-center mt-5 mb-4">
                <Col lg="2" className="pe-1">
                    <InputGroup>
                    <Form.Control
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    value={value}
                    />
                    </InputGroup>
                </Col>
                <Col lg="1" className=" d-flex justify-content-lg-start ps-1">
                    <Button onClick={handleClick}>
                    <FaSquarePlus />
                    </Button>
                </Col>
      
                </Row>               
    )
}

export default MyForm;