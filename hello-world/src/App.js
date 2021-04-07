import './App.css';
import { Component } from 'react';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import EventBind from './components/EventBind.js';
// import ParentComponent from './components/ParentComponent';
// import ClassClick from './components/ClassClick.js';
// import Stylesheet from './components/Stylesheet';
import './appStyles.css';
import styles from './appStyles.module.css';
// import Inline from './components/Inline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className='success'>Success</h1>
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind />        */}
        {/* <ClassClick /> */}
        {/*<FunctionClick />}
        {/*<Counter />}
        {/*<Message />/}
        {/*<Greet name="Bruce" heroname="Batman">
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
