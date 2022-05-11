import { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

class App extends Component {
  state = {
    value: "Rzeszow"
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <Form value={this.state.value} change={this.handleInput}/>
        <Result/>
      </div>
    )
  }
}

export default App;