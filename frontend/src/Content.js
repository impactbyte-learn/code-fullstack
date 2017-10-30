import React, { Component } from "react"

import { Row } from "reactstrap"

import User from "./User"

export default class Content extends Component {
  render() {
    return (
      <Row>
        {this.props.data.map(user => {
          return <User user={user} />
        })}
      </Row>
    )
  }
}
