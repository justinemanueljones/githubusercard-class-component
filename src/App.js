import React from 'react';
import axios from 'axios'
import Card from './components/Card'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/justinemanueljones")
      .then(response => {
        this.setState({ userData: response.data });
        console.log(this.state.userData);
      })
      .catch(error => {
        console.log('error', error)

      })

    axios
      .get("https://api.github.com/users/justinemanueljones/followers")
      .then(response => {
        console.log('followers', response);
        this.setState({ followers: response.data })
      })
      .catch(error => {
        console.log('error', error)

      })
  }

  render() {

    return (
      <div>
        <Card data={this.state.userData} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
