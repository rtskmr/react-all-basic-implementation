
import React, { Component } from 'react';
import '../css/devider.css';

class Divider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <hr style={{width: '1px', height:'1000px'}}/>
      </div>
    );
  }
}

export default Divider;
