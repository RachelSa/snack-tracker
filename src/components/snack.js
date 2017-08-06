import React from 'react'
import SnackForm from './snackForm'
import SnackDelete from './snackDelete'
import SnackView from './snackView'
import SelectViewButtons from './detailView/selectViewButtons'
import { Segment, Divider, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteSnack, setSnack } from '../actions'
import { withRouter } from 'react-router'

class Snack extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: 'view'
    }
  }

  componentWillMount(){
    let snackName = this.props.match.params.snackName
    let snack = this.props.snacks.find(snack => snack.name === snackName)
    this.props.setSnack(snack)
  }

  componentWillUpdate(nextProps) {
    let snackName = nextProps.match.params.snackName
    if (snackName !== this.props.currentSnack.name || nextProps.snacks !== this.props.snacks){
      this.setState({selected: 'view'})
      let snack = nextProps.snacks.find(snack => snack.name === snackName)
      this.props.setSnack(snack)
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
  if (this.props.currentSnack === '' ){
    return <div>select a snack</div>
  }
  else if (this.state.selected === 'view'){
    return (
      <SnackView handleChange={this.handleChange}/>
    )
  }
  else if (this.state.selected === 'delete'){
    return (
      <SnackDelete snack={this.props.currentSnack} handleChange={this.handleChange} handleDelete={this.handleDelete} />
    )
  }

  else {
    return (
      <Segment>
        <Header as='h2'>{this.props.currentSnack.name}</Header>
        <SelectViewButtons handleChange={this.handleChange}/>
         <Divider />
        <SnackForm />
      </Segment>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    snacks: state.snackReducer.snacks,
    currentSnack: state.snackReducer.currentSnack
  }
}


export default withRouter(connect(mapStateToProps, { deleteSnack, setSnack })(Snack))
