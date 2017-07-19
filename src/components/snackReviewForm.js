import React from 'react'
import { Input, Form, Button } from 'semantic-ui-react'


class SnackReviewForm extends React.Component {


  render(){
    return (
      <Form>

      <Input
        type='text'
        placeholder='so yummy'>
      </Input>

      <Button
        type="submit"
        >update</Button>

      </Form>

    )
  }
}
export default SnackReviewForm
