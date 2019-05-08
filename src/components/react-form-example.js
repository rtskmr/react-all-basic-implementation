import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IncrementDecrement from './increment-decrement';

class ReactFormExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
    }
    handleNameChange = evt => {
        this.setState({ name: evt.target.value});
    };
    handleAgeChange = evt => {
        this.setState({ age: evt.target.value});
    };
    submit = () => {
        console.log("Name: " + this.state.name);
        console.log("Age: " + this.state.age);
    }
    clear = () => {
        this.setState({
            name: "",
            age: "",
          });
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" id="example1" className="form-control form-control-lg" placeholder="Enter name" value={this.state.name}
                    onChange={this.handleNameChange}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" id="example2" className="form-control form-control-md" placeholder="Enter Age" value = {this.state.age}
                    onChange={this.handleAgeChange}/>
                </div>
                <div className="form-group">
                    <button onClick = {this.submit}>Submit</button>
                </div>
                <div className="form-group">
                    <button onClick = {this.clear}>Clear</button>
                </div>
            </div>
        )
    }
}

export default ReactFormExample;
