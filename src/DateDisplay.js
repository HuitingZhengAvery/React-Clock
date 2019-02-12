import React from 'react';
import moment from 'moment';
import'moment-timezone';


class DateDisplay extends React.Component {
    constructor() {
    super();

    this.state = { date: moment.tz().format('ddd, MMMM Do YYYY') };
    }
    componentDidMount() {
    this.nowdate();
    }
    nowdate() {

    setInterval(() => {
    this.setState({ date: moment.tz(this.props.city).format('ddd, MMMM Do YYYY') });
    }, 1000);
    }
    render() {
    return (
    <div>
        <h1>{this.state.date}</h1>
        <div className='Title'>{this.props.location}</div>
    </div>
    );
    }
    }

    export default DateDisplay;