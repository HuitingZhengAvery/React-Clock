import React from 'react';
import moment from 'moment';
import 'moment-timezone';



class TimeDisplay extends React.Component {
    constructor() {
    super();
    this.state = { time: moment.tz().format('HH:mm:ss') };
    }
    componentDidMount() {
    this.displayTime();
    }
    displayTime() {
    setInterval(() => {
    this.setState({ time: moment.tz(this.props.city).format('HH:mm:ss') });
    }, 1000);
    }
    render() {
    return (
    <div>
        <h1>{this.state.time}</h1>
    </div>
    );
    }
    }

    export default TimeDisplay