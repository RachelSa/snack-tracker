import React from 'react'
import Snack from './snack'
import { Link, Route, Switch } from 'react-router-dom'
import SnackForm from './snackForm'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class SnackDirectory extends React.Component {

  preparedSnacks = () => {
    return this.props.snacks.map(snack =>
      <div key={snack.name}>
        <Link
          to={`/snacks/${snack.name}`}>
          <p> {snack.name} </p>
        </Link>
      </div>
    )
  }


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
    snacks: state.snackReducer.snacks || [],
    brand: state.brandReducer
  }
}

export default connect(mapStateToProps, null)(SnackDirectory)
