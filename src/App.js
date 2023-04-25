import logo from './logo.svg'
import './App.css'
import React from 'react'
import axios from 'axios'
import Home from './views/Home'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      apiResponse: null
    };
  }

  fetchAPI = async () => {
    const res = await axios.get("http://localhost:9000/testAPI");
    if(res) {
      console.log("RES", res);
      this.setState({apiResponse: res.data});
    }
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.apiResponse ? this.state.apiResponse : "React Project"}
          </p>
          <br></br>
          <Home></Home>
        </header>
      </div>
    );
  }
}

export default App;
