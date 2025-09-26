import React from "react";

const InputDisplay = ({onClick}) => {
    const [value, setValue] = React.useState("");

    const handleClick = () => {
        if(value === "") return;
        onClick(value);
        setValue("");
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" onClick={handleClick}>Button</button>
            </div>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" onChange={e => setValue(e.target.value)} value={value} />
        </div>
    )
}

export default InputDisplay;