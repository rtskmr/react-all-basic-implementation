
import React, { Component } from 'react';
import  '../css/todo.css';
//import List from '../components/list';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      term: '',
      counter: 0,
    };
  }

  inputChange = (e) => {
    this.setState({
      'term':e.target.value
    })
  }

  add = (e) => {
    let a = this.state.items;
    a.push(this.state.term);
    this.setState({
      items: a,
      term: '',
      counter: this.state.counter + 1,
    })
  }

  deleteItem = (i) => () => {
    const rows = [this.state.items]
    console.log("this.state.items",this.state.items);

    rows.splice(i, 1)
    this.setState({ rows })
  }

  render() {
    let abc = [];
    let totalData = this.state.items;
    {totalData.map((item, i) =>
      abc.push(
        <div key = {i} className="mainDiv">
          {i+1} - {item} <button>Edit</button><button onClick={() => this.deleteItem(i)}>Delete</button>
        </div>
      )
    )}
    return (
      <div className="mainPage">
        <p>ToDo list examples (Add/Update/Delete)</p>
          <input type="text" id="fname" placeholder="Enter Item here" value={this.state.term} onChange={this.inputChange} />
          <div className="addBtnStyle">
          <button onClick={this.add}>Add</button>
          </div>
          {abc}
      </div>
    );
  }
}

export default Todo;
