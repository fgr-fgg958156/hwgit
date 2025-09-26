import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {imageSettings, keys} from "../keyConfig";

function FormControls({onClick}) {
    const [value, setValue] = useState(keys);

    const handleChange = (event, key) => {
        setValue(prevState => ({...prevState, [key]: event.target.type === "file" ? event.target.files[0] : event.target.value}));
    }

    const handleSubmit = () => {
        if(!isValidForm) return;
        onClick(value);
        setValue(keys);
    }

    const textValidation = (key) =>{
        return typeof key === "string" && key !== "";
    }

    const ageValidation = (key) =>{
        return !isNaN(Number(key)) && key >= 0
    }

    const imageValidation = (file) =>{
        if(!file)return false;
        return imageSettings.types.includes(file.type) && file.size < imageSettings.maxSize;
    }

    const isValidForm = () => {
        return textValidation(value.firstName) && textValidation(value.lastName) && ageValidation(value.age) && imageValidation(value.image)
    }

    return (
        <Form>
            <SmallInput id={"inputUserFirstName"} label={"First Name"} type={"text"} placeholder={"User First Name"} onChange={e => handleChange(e, "firstName")} value={value.firstName} />
            <SmallInput id={"inputUserSecondName"} label={"Last Name"} type={"text"} placeholder={"User Last Name"} onChange={e => handleChange(e, "lastName")} value={value.lastName} />
            <SmallInput id={"inputUserAge"} label={"User Age"} type={"number"} placeholder={"User Age"} onChange={e => handleChange(e, "age")} value={value.age} />
            <SmallInput id={"inputUserPhoto"} label={"User Photo"} type={"file"} placeholder={"User Photo"} onChange={e => handleChange(e, "image")}/>
            <Button variant="primary" onClick={handleSubmit} disabled={!isValidForm()}>Create New User</Button>
        </Form>
    );
}

function SmallInput({id, label, type, placeholder, onChange, value}) {
    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} value={type !== "file" ? value : undefined} onChange={onChange}/>
        </Form.Group>
    )
}

export default FormControls;