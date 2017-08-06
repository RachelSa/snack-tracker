import React from 'react'
import { Segment, Divider, Header, Button } from 'semantic-ui-react'
import SelectViewButtons from './detailView/selectViewButtons'
import {connect} from 'react-redux'


class SnackDelete extends React.Component {
  render(){
    return (
      <Segment>
      <Header as='h2'>{this.props.currentSnack.name}</Header>
      <SelectViewButtons handleChange={this.props.handleChange}/>
      <Divider />
      <p>Are you sure you want to delete this {this.props.currentSnack.name} entry?</p>
      <Button
      value={this.props.currentSnack.name}
      onClick={this.props.handleDelete}>
      Yes, get rid of it forever
      </Button>
    </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentSnack: state.snackReducer.currentSnack
  }
}

export default connect(mapStateToProps, null)(SnackDelete)
