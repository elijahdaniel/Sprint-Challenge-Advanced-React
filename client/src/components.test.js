import React from 'react'
import { render } from '@testing-library/React'
import App from './App'
import Toggle from './components/Toggle'
import Formation from './components/Formation'
import PlayerInfo from './components/PlayerInfo'

describe('App', () => {
  it('App renders without crashing', () => {
    render(<App />)
    // Test Passed
  })
})

describe('Toggle', () => {
  it('Toggle renders without crashing', () => {
    render(<Toggle />)
    // Test Passed
  })
})

describe('PlayerInfo', () => {
  it('PlayerInfo renders without crashing', () => {
    render(<PlayerInfo />)
    // Failed: TypeError: Cannot read property 'map' of undefined

    /* 
    Issue:
    React testing library read props as an empty object, which is true in this case: this.props.people.map, until the value of people is passed inside App.js as <PlayerInfo people={this.state.players}/>

    Solution: 
    Moved the map method into App.js and mapped through the object array directly from this.state.player
    */

    // Test Passed
  })
})

describe('Formation', () => {
  it('Formation renders without crashing', () => {
    render(<Formation />)
    // Test Failed

    /*
      Issue: 
      In Formation.js, I was setting up props as this.props.item.name. It seems that React testing prefers keys to be called individually. 

      solution: 
      In Formation.js, set props as this.props.name. In App.js, when calling the Formation component inside .map, I set the values individually (name={item.name} country={item.country} searches={item.searches})

      Rather than,
      :: Formation.js :: 
      this.props.item.name, this.props.item.country, this.props.item.country

      :: App.js ::
      .map(item => <Formation key={item.id} item={item} />)
      */

    // Test Passed
  })
})
