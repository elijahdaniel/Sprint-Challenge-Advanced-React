import React, { Component } from 'react'
import Toggle from './components/Toggle'
import Formation from './components/Formation'

// import PlayerInfo from './components/PlayerInfo'

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
          <div className='card-collection'>
            {/* <PlayerInfo people={this.state.player} /> */}
            {this.state.player.map(item => {
              return (
                <Formation
                  name={item.name}
                  country={item.country}
                  searches={item.searches}
                  key={item.id}
                />
              )
            })}
          </div>
        </div>
      </>
    )
  }
}
