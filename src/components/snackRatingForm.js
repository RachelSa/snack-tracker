import React from 'react'
import {  Rating, Form, Button } from 'semantic-ui-react'


class SnackRatingForm extends React.Component {
  render(){
    return (
      <Form>
      
      <Rating
        icon='heart'
        defaultRating={1}
        maxRating={3}
        />

      <Button
        type="submit"
        >update</Button>

      </Form>

    )
  }
}
export default SnackRatingForm
