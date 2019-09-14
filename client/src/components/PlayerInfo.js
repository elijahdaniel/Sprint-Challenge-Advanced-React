import React, { Component } from 'react'
import Formation from './Formation'

export default class PlayerInfo extends Component {
  render() {
    return (
      <div className='card-collection'>
        {this.props.people.map(item => {
          return <Formation key={item.id} item={item} />
        })}
      </div>
    )
  }
}
