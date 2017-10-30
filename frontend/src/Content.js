import React, { Component } from "react"

export default class Content extends Component {
  render() {
    return <div>{JSON.stringify(this.props.data)}</div>
  }
}
