import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from "./Timers/Timer";
import TimerClass from "./Timers/TimerClass";
import {getLocalDataKey, setLocalDataKey} from "./Config";

const InputSystem = () => {
    return(
        <Container>
            <Row>
                <Col><Timer secondsIni={getLocalDataKey("timerFunc").sec} isRunningIni={getLocalDataKey("timerFunc").run} isDeadIni={getLocalDataKey("timerFunc").dead} saveFunc={setLocalDataKey}></Timer></Col>
                <Col><TimerClass seconds={getLocalDataKey("timerClass").sec} isRunning={getLocalDataKey("timerClass").run} isDeadIni={getLocalDataKey("timerClass").dead} saveFunc={setLocalDataKey}></TimerClass></Col>
            </Row>
        </Container>
    );
}

export default InputSystem;