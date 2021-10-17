import React from "react";
import PropTypes from "prop-types"
import { render } from '@testing-library/react';


class App extends React.Component{

  constructor(props){
    super(props);
    console.log("constructor");
  }

  state = {
    count : 0,
  }

  add = () =>{
    console.log("add");
    this.setState({
      count : this.state.count +1
    });
  };

  minus = () =>{
    console.log("minus");
    this.setState({
      count : this.state.count -1
    });
  };

  componentDidMount(){
    console.log("componentDidMonut");
  }

  componentDidUpdate(){
    console.log("Update state"); 
  }

  render(){
    console.log("render");
    return (
      <div>
        <h1>I 'm Number {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )

  }
}

export default App;
 