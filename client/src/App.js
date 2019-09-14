import React, { Component } from 'react'

export default class App extends Component {
  state = {
    userCard: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json()) // format as json object
      .then(data => this.setState({ userCard: data }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
