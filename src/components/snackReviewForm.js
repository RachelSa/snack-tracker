import React from 'react'
import { Input, Form, Button } from 'semantic-ui-react'


class SnackReviewForm extends React.Component {

  handleChange = (event, result) => {
    let key = result.name,
        value = result.value
    this.setState({
      [key]: value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.changeSnack({snack: this.state})

  }


  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
      <Input
        onChange={this.handleChange}
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
