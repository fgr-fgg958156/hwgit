import CardDisplay from "./TimerDisplayCard/CardDisplay";
import {useEffect, useState} from "react";

function Timer({secondsIni, isRunningIni, isDeadIni, saveFunc}) {
    const name = "timerFunc"
    const [seconds, setSeconds] = useState(secondsIni);
    const [isRunning, setIsRunning] = useState(isRunningIni);
    const [isDead, setIsDead] = useState(isDeadIni);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        stop();
        setSeconds(0);
    }
    const dead = () => setIsDead(true);

    const fullSave = () => saveFunc(name, ["sec", "run", "dead"], [seconds, isRunning, isDead]);

    useEffect(() => {
        console.log(`Updated: ${seconds}`);
    }, [seconds]);

    useEffect(() => {
        fullSave()
    }, [seconds, isDead, isRunning]);

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        !isDead ? (<CardDisplay name={"Timer by function"} value={seconds} startOnClick={start} stopOnClick={stop} resetOnClick={reset} unmountOnClick={dead} classNameForValue={!isRunning ? "text-danger" : ""}></CardDisplay>): null
    );
}

export default Timer;