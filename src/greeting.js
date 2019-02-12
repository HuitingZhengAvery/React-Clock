import React from 'react';


class Greeting extends React.Component {
    render() {
    return (
    <button onClick={this.handleClick}>Greeting</button>
    )
    }
    handleClick() {
    window.alert('hello, champion!');
    }
    }
export default Greeting;