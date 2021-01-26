import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Hello from './components/Hello';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroname="Batman">
          <p>This is children props</p>
        </ Greet>
        <Greet name="Clark" heroname="Superman" />
          <button>Action</button>
        <Greet name="Diana" heroname="Wonder Woman" />
        <Welcome name="Bruce" heroname="Batman" />
        <Welcome name="Clark" heroname="Superman" />
        <Welcome name="Diana" heroname="Wonder Woman" />
        {/*<Welcome />*/}
        {/*<Hello />*/}
      </div>
    );
  }
}

export default App;
