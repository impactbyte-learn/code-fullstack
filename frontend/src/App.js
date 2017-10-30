import React, { Component } from "react"

const API_URL = "https://backend-xnmfwjkobs.now.sh"

class App extends Component {
  render() {
    return (
      <div id="container">
        <p>{API_URL}</p>
      </div>
    )
  }
}

export default App
