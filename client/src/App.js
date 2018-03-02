import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      masterList:[]
    } 
  }

  componentWillMount() {
   axios.get('/api/scraper/amiibos')
    .then((res) => {
      console.log('res: ' + res.data)
      this.setState({
        masterList: res.data
      })
      console.log(this.state.masterList)
    })
    .catch((er) => {
      console.log(er)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Amiibo</h2>
        </div>
        <p className="App-intro">
          Amiibo scraper <code>star</code> and save.
        </p>

        <ul>
          {this.state.masterList.map(i => 
            <li>{i}</li>
          )}          
        </ul>
      </div>
    );
  }
}

export default App;
