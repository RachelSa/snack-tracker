import React from 'react'
import SnackForm from './snackForm'
import { Button } from 'semantic-ui-react'
import SelectViewButtons from './detailView/selectViewButtons'
//import { Route } from 'react-router-dom'
import { Segment, Divider, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { currentSnack } from '../actions'

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
    return this.snack = nextProps.snacks.find(snack => snack.name === snackName)
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    })
  }

  handleDelete = (event) => {
    console.log("deleting...")
  }




render(){
  if (this.snack === null ){
    return <div></div>
  }
  else if (this.state.selected === 'view'){
    const rating = this.snack.rating ? <div><Header size='small'>Rating</Header> {this.snack.rating} / 3 </div> : <div><Header size='small'>Rating</Header>no rating yet 😐</div>
    const review = this.snack.review ? <div><Header size='small'>Review</Header> {this.snack.review}  </div> : <div><Header size='small'>Review</Header>no review yet 😐</div>

    return (
      <Segment>
        <Header as='h2'>{this.snack.name}</Header>

        <SelectViewButtons handleChange={this.handleChange}/>

         <Divider />
        <div><Header size='small'>Flavor Profile</Header> {this.snack.type}</div>
         <Divider />
          {rating}
         <Divider />
          {review}

      </Segment>
    )
  }
  else if (this.state.selected === 'delete'){
    return (
      <Segment>
        <Header as='h2'>{this.snack.name}</Header>
        < SelectViewButtons handleChange={this.handleChange}/>
        <Divider />

        <p>Are you sure you want to delete this {this.snack.name} entry?</p>
        <Button
        onClick={this.handleDelete}>
        Yes, get rid of it forever
        </Button>
      </Segment>
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

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     currentSnack,
//   }, dispatch)
// }


export default connect(mapStateToProps, null)(Snack)
