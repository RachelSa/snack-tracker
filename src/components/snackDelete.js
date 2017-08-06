import React from 'react'
import { Segment, Divider, Header, Button } from 'semantic-ui-react'
import SelectViewButtons from './detailView/selectViewButtons'


class SnackDelete extends React.Component {
  render(){
    return (
      <Segment>
      <Header as='h2'>{this.props.snack.name}</Header>
      <SelectViewButtons handleChange={this.props.handleChange}/>
      <Divider />
      <p>Are you sure you want to delete this {this.props.snack.name} entry?</p>
      <Button
      value={this.props.snack.name}
      onClick={this.props.handleDelete}>
      Yes, get rid of it forever
      </Button>
    </Segment>
    )
  }
}

export default SnackDelete
