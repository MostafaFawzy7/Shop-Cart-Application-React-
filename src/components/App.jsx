import React, { Component, Fragment } from "react";
import NavBar from './navbar';
import Counters from "./counters";

class App extends Component {

  state = {
    counters: [
      {id:1 ,value:0},
      {id:2 ,value:0},
      {id:3 ,value:0},
      {id:4 ,value:0}
    ]
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  }

  render() {
    const {counters} = this.state;
    const {handleReset, handleIncrement, handleDelete} = this;
    return (
      <Fragment>
        <NavBar totalCounters = { counters.filter(countValue => countValue.value > 0).length } />
        <Counters
          counters = {counters}
          onReset = {handleReset}
          onHandleIncrement = {handleIncrement}
          onHandleDelete = {handleDelete}   
        />
      </Fragment>
    );   
  }
}

export default App;
