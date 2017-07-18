import React from 'react'
import { Input, Select, Rating, Form, Button } from 'semantic-ui-react'


class SnackForm extends React.Component {
  constructor (){
    super()
    this.options = [
      {value: 'salty', text: 'salty'},
      {value: 'sweet', text: 'sweet'},
      {value: 'other', text: 'other'}
    ]
  }

  render(){
    return (
      <Form>
      <Form.Field>
        <label>Name</label>
        <input
          placeholder='cheetos'>
        </input>
         </Form.Field>
         <Form.Field>
        <Select
        placeholder='Select Snack Type'
        options={this.options} />
        </Form.Field>
        <Form.Field>
        <label>Review</label>
        <Input
          type='text'
          placeholder='so yummy'>
        </Input>
        </Form.Field>
        <Form.Field>
        <label>rating:</label>
        <Rating
          icon='heart'
          defaultRating={1}
          maxRating={3}
          />
          </Form.Field>
          <Form.Field>
        <Button
          type="submit"
          >Submit</Button>
          </Form.Field>

    </Form>
    )
  }
}

export default SnackForm
