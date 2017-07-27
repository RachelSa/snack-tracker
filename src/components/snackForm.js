import React from 'react'
import { Input, Select, Rating, Form, Button } from 'semantic-ui-react'
import { addSnack } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class SnackForm extends React.Component {
  constructor (props){
    super(props)
    this.options = [
      {value: 'salty', text: 'salty'},
      {value: 'sweet', text: 'sweet'},
      {value: 'other', text: 'other'}
    ]
    this.state = {
      name: '',
      type:'',
      review:'',
      rating:''
    }
  }

  componentWillMount(){
    if (this.props.snack){
      let snack = this.props.snack
      this.setState({
        name: snack.name,
        type: snack.type,
        review: snack.review,
        rating: snack.rating
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.snack && nextProps.snack !== this.state){
      let snack = nextProps.snack
      this.setState({
        name: snack.name,
        type: snack.type,
        review: snack.review,
        rating: snack.rating
      })
    }
  }

  handleChange = (event, result) => {
    let key = result.name,
        value = result.value
    this.setState({
      [key]: value
    })

  }

  handleRate = (e, { rating, maxRating }) => {
    this.setState({ rating:rating })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addSnack({snack: this.state})

  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Field>
          <label>Name</label>
          <Input
            placeholder='cheetos'
            value={this.state.name}
            onChange={this.handleChange}
            name='name'/>
        </Form.Field>
        <Form.Field>
          <label>Flavor Profile</label>
          <Select
          onChange={this.handleChange}
          name='type'
          value={this.state.type}
          placeholder='Select Snack Type'
          options={this.options} />
        </Form.Field>
        <Form.Field>
          <label>Review</label>
          <Input
          onChange={this.handleChange}
          name='review'
          type='text'
          value={this.state.review}
          placeholder='so yummy'>
          </Input>
        </Form.Field>
        <Form.Field>
          <label>rating:</label>
          <Rating
            onRate={this.handleRate}
            value={this.state.rating}
            icon='heart'
            defaultRating={1}
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
//rating edit is broken, does not display accurate rating

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {addSnack},
    dispatch)
}

export default connect(null, mapDispatchToProps)(SnackForm)
