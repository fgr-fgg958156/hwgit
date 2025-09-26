import React from "react";

const CardDisplay = ({info, isDone, onClick}) => {
    return (
        <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={onClick}
        >
            <span>{info}</span>
            <span>{isDone ? "✔️" : "❌"}</span>
        </button>
    )
}

export default CardDisplay;