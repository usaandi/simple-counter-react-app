import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
/*
  What did i learn:
  Using Props
  Raising and Handling Events
  Lifting the State
  Functional Components
  Lifecycle Hooks
*/
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 0 }
    ]
  };

  /*Initalize propertys in this class
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }
  */

  componentDidMount() {
    //Ajax Calls or Axios
    console.log("app Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };
  handleAdd = () =>{
      let maxId = null;
      const counters = [...this.state.counters];
      counters.map(obj =>{
        if (obj.id > maxId) maxId = obj.id;
      })
      console.log(maxId);
      counters.push({id:maxId+1,value:0});
      this.setState({counters});
      console.log('hey');
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value --;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters 
            onAdd={this.handleAdd}
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
