import React, { Component } from 'react'
import Navbar from './components/navbar'
import SnackDirectory from './components/snackDirectory'
import snacks from './snacks'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          < Navbar store={this.props.store} />

          <Route
            path='/snacks'
            render={() => <SnackDirectory snacks={snacks}/>}
          />

        </div>
      </Router>
    )
  }
}

export default App;
