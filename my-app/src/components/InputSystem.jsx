import React from "react";
import InputDisplay from "./input/InputDisplay";
import CardDisplay from "./card/CardDisplay";

const cards = [
    {id: 0, info: "aaaa", isDone: false}
]

const InputSystem = () => {
    const [cardsInner, setCard] = React.useState(cards);

    const statusChanger = (id) => {
        setCard(prevState => prevState.map(card => card.id === id ? {...card, isDone: !card.isDone} : card));
    }

    const renderCards =()=>{
        return cardsInner.map(card => (
            <li key={card.id}><CardDisplay info={card.info} isDone={card.isDone} onClick={() => {statusChanger(card.id)}}/></li>
        ))
    }

    const addCard = (value) => {
        setCard((prevState) => [
            ...prevState,
            {id:Date.now(), info: value, isDone: false}
        ])
    }

    return(
        <>
            <InputDisplay onClick={addCard}/>
            <ul>
                {renderCards()}
            </ul>
        </>
    )
}

export default InputSystem;