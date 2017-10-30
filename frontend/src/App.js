import React, { Component } from "react"
import { Container } from "reactstrap"

import Content from "./Content"

const API_URL = "https://backend-fjjtoudnal.now.sh"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  async componentWillMount() {
    const RESPONSE = await fetch(API_URL)
    const DATA = await RESPONSE.json()
    this.setState({
      data: DATA
    })
  }

  render() {
    return (
      <Container>
        <Content data={this.state.data} />
      </Container>
    )
  }
}
