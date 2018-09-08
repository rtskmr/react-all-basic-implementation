import React, { Component } from 'react';

class WatchTimer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "ritesh",
            date : new Date().toLocaleTimeString()
        }
    }
    render() {
        return (
            <div className="App">
                This is timer examples -
                Current time - {this.state.date}

             </div>
        );
    }
}
export default WatchTimer
