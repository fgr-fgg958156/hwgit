import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function Input({onChange}) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>County and city</InputGroup.Text>
            <Form.Control aria-label="city" onChange={onChange} />
            {/*<Form.Control aria-label="city" />*/}
        </InputGroup>
    )
}

export default Input;