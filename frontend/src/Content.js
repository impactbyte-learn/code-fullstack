import React, { Component } from "react"

export default class Content extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(user => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <h3>{user.username}</h3>
              <h3>{user.email}</h3>
              <br />
            </div>
          )
        })}
      </div>
    )
  }
}
