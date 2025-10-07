import {Component} from "react";
import CardDisplay from "./TimerDisplayCard/CardDisplay";

class TimerClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: props.seconds || 0,
            isDead: props.isDead || false,
            isRunning: props.isRunning || false
        };
        this.name = "timerClass"
    }

    fullSave = () => {
        const {saveFunc} = this.props;
        if (typeof saveFunc === "function") {
            saveFunc(this.name, ["sec", "run", "dead"], [this.state.seconds, this.state.isRunning, this.state.isDead]);
        }
    }

    start = () => {
        if(!this.interval){
            this.interval = setInterval(() => {
                this.setState(preState =>({seconds: preState.seconds + 1}));
            }, 1000)
        }
        this.setState({isRunning: true})
    }

    stop = () => {
        clearInterval(this.interval);
        this.setState({isRunning: false})
        this.interval = null
    }

    reset = () => {
        this.setState({seconds: 0});
        this.stop();
    }

    componentDidMount() {
        this.start()
    }

    componentWillUnmount() {
        this.stop()
    }

    handleUnmount = () => {
        this.setState({isDead: true});
        this.stop()
    }

    componentDidUpdate(prevState) {
        if(prevState.isDead !== this.state.isDead || prevState.isRunning !== this.state.isRunning || prevState.seconds !== this.state.seconds){
            this.fullSave()
            console.log(`Updated: ${this.state.seconds}`);
        }
    }

    render() {
            return (
                !this.state.isDead ? <CardDisplay name={"Timer by class"} value={this.state.seconds} startOnClick={this.start} stopOnClick={this.stop} resetOnClick={this.reset} unmountOnClick={this.handleUnmount} classNameForValue={!this.state.isRunning ? "text-danger" : "" }></CardDisplay> : null
            )
    }
}

export default TimerClass;