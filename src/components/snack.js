import React from 'react'
import Snacks from '../snacks'

const Snack = (props) => {
  let snackName = props.match.params.snackName
  const snack = Snacks.find(snack => snack.name === snackName)

  return (
    <div>
      <p>{snack.name}</p>
      <p>{snack.type}</p>
      <p>{snack.rating}</p>
      <p>{snack.review}</p>
    </div>
  )
}
export default Snack
