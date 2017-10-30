import React, { Component } from "react"

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
      <div id="container">
        <Content data={this.state.data} />
      </div>
    )
  }
}
