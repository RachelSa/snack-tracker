import React from 'react'
import {  Rating, Form, Button } from 'semantic-ui-react'


class SnackReviewForm extends React.Component {
  render(){
    return (
      <Form>
      <Form.Field>
        <label>Review</label>
        <input
          placeholder='yummy cheetos'>
        </input>
      </Form.Field>

      <Button
        type="submit"
        >update</Button>

      </Form>

    )
  }
}
export default SnackReviewForm
