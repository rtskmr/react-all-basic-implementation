import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IncrementDecrement from './increment-decrement';

class ReactRouterExampleExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <p><b>Hello router examples</b></p>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Careers</Link></li>
                        </ul>
                        <Route exact path="/" component={IncrementDecrement} />
                        <Route path="/IncrementDecrement" component={IncrementDecrement} />
                        <Route path="/IncrementDecrement" component={IncrementDecrement} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default ReactRouterExampleExample;
