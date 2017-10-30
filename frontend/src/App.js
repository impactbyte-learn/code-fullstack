import React, { Component } from "react"

const API_URL = "http://localhost:8000"

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
        <p>{JSON.stringify(this.state.data)}</p>
      </div>
    )
  }
}

export default App
