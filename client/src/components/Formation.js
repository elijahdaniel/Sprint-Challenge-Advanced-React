import React, { Component } from 'react'

export default class Formation extends Component {
  render() {
    return (
      <div className='playerInfo'>
        <span className='name'>{this.props.name}</span>
        <span className='country'>{this.props.country}</span>
        <span className='searches'>Total Searches: {this.props.searches}</span>
      </div>
    )
  }
}
