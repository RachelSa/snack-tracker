import React from 'react'
import Snack from './snack'
import { Link, Route, Switch } from 'react-router-dom'
import SnackForm from './snackForm'



const SnackDirectory = ({snacks}) => {

  const preparedSnacks = snacks.map(snack =>
    <div>
      <Link
        to={`/snacks/${snack.name}`}>
        <p key={snack.id}> {snack.name} </p>
      </Link>

    </div>
  )

  return (
      <div>
      {preparedSnacks}
      <Link
        to={`/snacks/new`}>
        <p>+ new snack</p>
      </Link>
        <div>
        <Switch>
          <Route
            exact path="/snacks/new" component={SnackForm}
          />
          <Route
            path="/snacks/:snackName" component={Snack}
          />
          </Switch>
          </div>
      </div>
    )

}
export default SnackDirectory
