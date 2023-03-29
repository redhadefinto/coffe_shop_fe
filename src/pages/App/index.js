import React, {Component, useMemo } from "react";
import logo from "../../assets/logo.svg";
import "../../styles/App.css";
// import { getUsers } from '../../utils/https/users'
import { usersAction } from '../../redux/slices/users'
import { useDispatch } from "react-redux";

import withNavigate from "../../utils/wrapper/WithNavigate";

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
    this.controller = useMemo(() => new AbortController(), []);
  }

  async componentDidMount() {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state)
    // bisa jalankan side efek/ fetch
    // fecthUsers(this.controller)
    //   .then((res) => {
    //     if (!res.ok) throw res.status;
    //     return res.json();
    //   })
    //   .then((data) => {
    //     this.setState({
    //       data,
    //     });
    //   })
    //   .catch((err) => {
    //     if (this.controller.signal.aborted) return;
    //     console.log(err.message);
    //   });
    // await getUsers(this.controller).then(({data}) => this.setState({
    //   data: data.data
    // })).catch(err => console.log(err));
    dispatch(usersAction.getUsersThunk(this.controller)) 
    // console.log(data)
  }
  componentWillUnmount() {
    () => this.controller.abort()
  }
  

  handleNavigate(to) {
    this.props.navigate(to)
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
          <div>
            <button onClick={() => this.handleNavigate("/")}>Go Home</button>
          </div>
        </header>
      </div>
    );
  }
}

const AppWithNavigate = withNavigate(App)
export default AppWithNavigate;
