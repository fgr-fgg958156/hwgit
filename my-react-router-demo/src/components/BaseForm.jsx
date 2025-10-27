import {Button, Form} from "react-bootstrap";

const BaseForm = ({setTitle, setDescription, onClick, titleValue, descriptionValue, buttonText}) => {
    return (
        <Form className="p-3">
            <Form.Group className="mb-3" controlId="appForm.ControlInput1">
                <Form.Label>Task title</Form.Label>
                <Form.Control type="textarea" placeholder="task title" onChange={(e) => setTitle(e.target.value)} value={titleValue}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="appForm.ControlTextarea1">
                <Form.Label>Task description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} value={descriptionValue}/>
            </Form.Group>
            <Button variant="primary" type="reset" onClick={onClick}>
                {buttonText}
            </Button>
        </Form>
    )
}

export default BaseForm