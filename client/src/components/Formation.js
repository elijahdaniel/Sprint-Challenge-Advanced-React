import React, { Component } from 'react'

export default class Formation extends Component {
  render() {
    return (
      <div className='playerInfo'>
        <span className='name'>{this.props.item.name}</span>
        <span className='country'>{this.props.item.country}</span>
        <span className='searches'>
          Total Searches: {this.props.item.searches}
        </span>
      </div>
    )
  }
}
