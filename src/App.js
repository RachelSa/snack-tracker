import React, { Component } from 'react'
import SnackDirectory from './components/snackDirectory'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Container>
          <Route
            path='/snacks'
            component={SnackDirectory}
          />
          <Route
            exact path="/"
            render={()=> <h2>welcome to the snack app!</h2>}
            />
        </Container>
        </div>
      </Router>
    )
  }
}




export default App
