import React, { Component } from 'react'
import PlayerInfo from './components/PlayerInfo'
import Toggle from './components/Toggle'

export default class App extends Component {
  state = {
    player: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json()) // format as json object
      .then(data => this.setState({ player: data }, console.log(data)))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        <Toggle />
        <h1 className='title'>
          Women's World Cup Players Ranked in Search Interest
        </h1>
        <div className='dataContainer'>
          <PlayerInfo people={this.state.player} />
        </div>
      </>
    )
  }
}
