import React from 'react'
import Snack from './snack'
import { Link, Route, Switch } from 'react-router-dom'
import SnackForm from './snackForm'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class SnackDirectory extends React.Component {

  handleClick = () => {

  }

  preparedSnacks = () =>
    this.props.snacks.map(snack =>
    <div key={snack.name}>
      <Link
        onClick={this.handleClick}
        to={`/snacks/${snack.name}`}>
        <p> {snack.name} </p>
      </Link>

    </div>
  )

  render(){
    return (
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              {this.preparedSnacks()}
              <Link
                to={`/snacks/new`}>
                <p>+ new snack</p>
              </Link>
            </Grid.Column>
            <Grid.Column>
            <div>
            <Switch>
              <Route
                path="/snacks/new" component={SnackForm}
              />
              <Route
                path="/snacks/:snackName" component={Snack}
              />
              </Switch>
              </div>
              </Grid.Column>
            </Grid.Row>
        </Grid>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    snacks: state.snacks
  }
}

export default connect(mapStateToProps, null)(SnackDirectory)
