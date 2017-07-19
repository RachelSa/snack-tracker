import React, { Component } from 'react'
import Navbar from './components/navbar'
import SnackDirectory from './components/snackDirectory'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          < Navbar store={this.props.store} />
          <Container>
          <Route
            path='/snacks'
            component={SnackDirectory}
          />
        </Container>
        </div>
      </Router>
    )
  }
}




export default App
