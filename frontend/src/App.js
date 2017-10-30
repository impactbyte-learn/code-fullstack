import React, { Component } from "react"

const API_URL = "https://backend-fjjtoudnal.now.sh"

class App extends Component {
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
        <h1>{JSON.stringify(this.state.data)}</h1>
      </div>
    )
  }
}

export default App
