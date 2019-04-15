import React, { Component } from 'react';

class Stopwatch extends Component {
    state = {
        isRunning: false,
        //representation of the amount of time that's passed by
        elapsedTime: 0,
        // exact time at which the previous tick happend and subtract the current time from that. Then take that value and add it to elapsed time
        previousTime: 0
    };

    //components instance follows a cycle; mounted onto DOM, updated with changes in data, and it's unmounted from the DOM
    componentDidMount() {
        // JavaScript set interval method
        // set interval repeatedly calls a function or executes some code with a fixed time delay between each call
        // returns an interval ID which uniquely identifies the interval
        this.intervalId = setInterval(() => this.tick(), 100)
    }

    componentWillUnmount() {
        //clears anything that needs to be cleared when a component is removed from the DOM
        //componentWIllUnmout method will clear the interval so that's it no longer ticking away and taking up memory
        //clearInterval cancels any timed repeating actions created by calling setInterval
        clearInterval(this.intervalId);
    }

    tick = () => {
        if (this.state.isRunning) {
            // if true update the tickcount
            const now = Date.now();
/*          this.setState({
                // update to now, so it can calculate the elapsedTime or the time since the privious tick
                previousTime: now,
                // needs to be increased by interval of time, calculating the diffrence betweens now's time and the time stamp stored in state (now - this.state.previousTime), will increase the elapsedTime by adding the diffrence to this.state.elapsedTime
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
                // each time tick runs, if isRunning is true, setState is going to update elapsedTime using the diffrence between previousTime and now. At the same time, it's updating previousTime to date.now
                // will be executed over and over again as long as the timer is running
            }) */

            // prevState beter than set.state
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            //toggle isRunning state
            //also possible with if else 
            isRunning: !prevState.isRunning
        }));
        //update to previous time
        if (!this.state.isRunning) {
            // Date.now() returns the exact number of milliseconds elapsed (since 01/01/1970)
            this.setState({ previousTime: Date.now()})
        }
    }

    handleReset = () => {
        this.setState({elapsedTime: 0})
    }

    render(){
        const seconds = Math.floor(this.state.elapsedTime / 1000)
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {/* need to show in seconds  */}
                    { seconds }
                </span>

                <button onClick={this.handleStopwatch}>
                    { this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

export default Stopwatch;