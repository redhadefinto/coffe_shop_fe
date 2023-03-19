import React, {Component } from "react";
import logo from "../../assets/logo.svg";
import "../../styles/App.css";

class App extends Component {
  // state merupakan variabel local dari kelas object
  // jika state berubah maka komponen rerender
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      address: "Padang",
      age: props.age,
      data: []
    };
    this.controller = new AbortController()
  }

  componentDidMount() {
    // bisa jalankan side efek/ fetch
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: this.controller.signal
    }).then((res) => {
      if(!res.ok) throw res.status;
      return res.json()
  }).then((data) => {
    this.setState({
    data,
    })
  })
    .catch(err => {
      if(this.controller.signal.aborted) return;
      console.log(err.message)
    })
  }
  componentWillUnmount() {
    () => this.controller.abort()
  }
  

  changeCounter = () => {
    this.setState({
      counter: 2
    })
  }
  render() {
    console.log(this.counter)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <div>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.changeCounter}>Change Counter</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
