import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [words, setWords] = useState( []);

    function addNewWord() {
        const word = prompt('введіть слово');
        if(word){
            setWords([...words, word]);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Теперішній список слів - "{words.join(" ,")}"</h1>
                    <MyButton onClick = {addNewWord} />
                </div>
            </header>
        </div>
    );
}

function MyButton({onClick}) {
    return (
        <button onClick={onClick}>
            кнопка рандом
        </button>
    );
}

export default App;
