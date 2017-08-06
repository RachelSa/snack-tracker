import React from 'react'
import SnackForm from './snackForm'
import SnackDelete from './snackDelete'
import SnackView from './snackView'
import SelectViewButtons from './detailView/selectViewButtons'
import { Segment, Divider, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteSnack } from '../actions'
import { withRouter } from 'react-router'

class Snack extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: 'view'
    }
    let snackName = props.match.params.snackName
    this.snack = props.snacks.find(snack => snack.name === snackName)
  }

  componentWillUpdate(nextProps) {
    let snackName = nextProps.match.params.snackName
    if (snackName !== this.snack.name || nextProps.snacks !== this.props.snacks){
      this.setState({selected: 'view'})
      return this.snack = nextProps.snacks.find(snack => snack.name === snackName)
    }
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    })
  }

  handleDelete = (event) => {
    this.props.deleteSnack(event.target.value)
    this.props.history.push('/snacks')
  }


render(){
  if (this.snack === null ){
    return <div></div>
  }
  else if (this.state.selected === 'view'){
    return (
      <SnackView snack={this.snack} handleChange={this.handleChange}/>
    )
  }
  else if (this.state.selected === 'delete'){
    return (
      <SnackDelete snack={this.snack} handleChange={this.handleChange} handleDelete={this.handleDelete} />
    )
  }

  else {
    return (
      <Segment>
        <Header as='h2'>{this.snack.name}</Header>
        <SelectViewButtons handleChange={this.handleChange}/>
         <Divider />
        <SnackForm snack={this.snack}/>
      </Segment>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    snacks: state.snackReducer.snacks
  }
}


export default withRouter(connect(mapStateToProps, { deleteSnack })(Snack))
