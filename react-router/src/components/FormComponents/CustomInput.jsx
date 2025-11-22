import {Col, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CustomInput = ({title, prepend, type, placeholder, validFeedback, invalidFeedback, md}) => {
    return (
        <Form.Group as={Col} md={md}>
            <Form.Label>{title}</Form.Label>
            <InputGroup hasValidation>
                {prepend.active ? <InputGroup.Text id="inputGroupPrepend">{prepend.text}</InputGroup.Text> : null}
                <Form.Control
                    type={type}
                    placeholder={placeholder}
                    aria-describedby={prepend.active ? "inputGroupPrepend" : undefined}
                    required
                />
                <Form.Control.Feedback type="valid">{validFeedback}</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{invalidFeedback}</Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    )
}

export default CustomInput;