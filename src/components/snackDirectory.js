import React from 'react'
import Snack from './snack'
import { Link, Route, Switch } from 'react-router-dom'
import SnackForm from './snackForm'
import { Grid } from 'semantic-ui-react'


const SnackDirectory = ({snacks}) => {

  const preparedSnacks = snacks.map(snack =>
    <div key={snack.id}>
      <Link
        to={`/snacks/${snack.name}`}>
        <p> {snack.name} </p>
      </Link>

    </div>
  )

  return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            {preparedSnacks}
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
export default SnackDirectory
