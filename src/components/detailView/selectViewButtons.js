import React from 'react'
import { Button } from 'semantic-ui-react'

const SelectViewButtons = ({handleChange}) => {
  return (
    <div>
      <Button
      size='mini'
      value="view"
      onClick={handleChange}>
      view
      </Button>

      <Button
      size='mini'
      value='edit'
      onClick={handleChange}>
      edit
      </Button>

      <Button
      size='mini'
      value="delete"
      onClick={handleChange}>
      delete
      </Button>
    </div>)

}
export default SelectViewButtons
