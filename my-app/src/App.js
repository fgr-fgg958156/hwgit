import './App.css';
import {useState} from "react";

function App() {
  const [emojis, setEmoji] = useState({
    "good": {
      name: "🙂",
      count: 0
    },
    "okay": {
      name: "😑",
      count: 0
    },
    "bad": {
      name: "☹️",
      count: 0
    }
  });
  const [winer, setWiner] = useState("❓")

  function getWiner(obj){
    const emojisToArray = Object.values(obj);
    let maxNum = -1;
    let winerName = "";

    for(const e of emojisToArray) {
        if(e.count > maxNum){
          maxNum = e.count;
          winerName = e.name;
        }
    }

    setWiner(winerName)
  }
  return (
    <div className="App">
      <header className="App-header">
        <MakeListOfEmoji obj = {emojis} state={setEmoji}/>
        <Button onClick={() => {getWiner(emojis)}} name = "Show Results" />
        <p> {winer} </p>
      </header>
    </div>
  );
}

function Button({onClick, name}){
  return (
      <button onClick={onClick}>{name}</button>
  )
}

function Emoji({onClick, name, count}){
  return (
      <li onClick={onClick}>{name} {count}</li>
  )
}

function MakeListOfEmoji({obj, state}){
  return (
      <ul>
        {
          Object.entries(obj).slice(0, obj.length).map(([key, value]) => (
            <Emoji
              onClick={()=>{
                state(state => ({...state, [key]: {...state[key], count: state[key].count + 1}}))
              }}
              name={value.name}
              count={value.count}
            />
          ))
        }
      </ul>
  )
}

export default App;
