import React from 'react'
import { Input, Select, Rating, Form, Button } from 'semantic-ui-react'
import { addSnack, editSnack } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class SnackForm extends React.Component {
  constructor (props){
    super(props)
    this.options = [
      {value: 'salty', text: 'salty'},
      {value: 'sweet', text: 'sweet'},
      {value: 'other', text: 'other'}
    ]
    this.state = {
      snack:{
      name: '',
      type:'',
      review:'',
      rating:''},
      edit: false
    }
  }

  componentWillMount(){
    if (this.props.match.path !== "/snacks/new"){
      let snack = this.props.currentSnack
      this.setState({
        snack: {
        name: snack.name,
        type: snack.type,
        review: snack.review,
        rating: snack.rating },
        edit: true
      })
    }
  }

  handleChange = (event, result) => {
    let key = result.name,
        value = result.value
    this.setState({
      snack: {
        ...this.state.snack,
        [key]: value
      }
    })
  }

  handleRate = (e, { rating, maxRating }) => {
    this.setState({
      snack: {
        ...this.state.snack,
        rating: rating
      }
    }
  )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.edit){
      this.props.editSnack({snack: this.state.snack})
    }
    else {
      this.props.addSnack({snack: this.state.snack})
      this.props.history.push(`/snacks/${this.state.snack.name}`)
    }


  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Field>
          <label>Name</label>
          <Input
            placeholder='cheetos'
            value={this.state.snack.name}
            onChange={this.handleChange}
            name='name'/>
        </Form.Field>
        <Form.Field>
          <label>Flavor Profile</label>
          <Select
          onChange={this.handleChange}
          name='type'
          value={this.state.snack.type}
          placeholder='Select Snack Type'
          options={this.options} />
        </Form.Field>
        <Form.Field>
          <label>Review</label>
          <Input
          onChange={this.handleChange}
          name='review'
          type='text'
          value={this.state.snack.review}
          placeholder='so yummy'>
          </Input>
        </Form.Field>
        <Form.Field>
          <label>rating:</label>
          <Rating
            onRate={this.handleRate}
            value={this.state.snack.rating}
            icon='heart'
            defaultRating={this.state.snack.rating}
            maxRating={3}
            />
          </Form.Field>
          <Form.Field>
            <Button
              type="submit">
              Submit
            </Button>
          </Form.Field>
    </Form>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentSnack: state.snackReducer.currentSnack
  }
}

export default withRouter(connect(mapStateToProps, {addSnack, editSnack})(SnackForm))
