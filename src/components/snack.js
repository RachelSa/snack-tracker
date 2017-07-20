import React from 'react'
import SnackRatingForm from './snackRatingForm'
import SnackReviewForm from './snackReviewForm'
import { Button } from 'semantic-ui-react'
//import { Route } from 'react-router-dom'
import { Segment, Divider, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { currentSnack } from '../actions'

class Snack extends React.Component {

  componentWillMount(){
    let snackName = this.props.match.params.snackName
    return this.snack = this.props.snacks.find(snack => snack.name === snackName)
  }


  componentWillUpdate(nextProps) {
    let snackName = nextProps.match.params.snackName
    return this.snack = nextProps.snacks.find(snack => snack.name === snackName)
  }


render(){
  if (this.snack === null ){
    return <div></div>
  }
  else {
    const rating = this.snack.rating ? <div><Header size='small'>Rating</Header> {this.snack.rating} / 3 </div> : <div><Header size='small'>Rating</Header><SnackRatingForm/></div>
    const review = this.snack.review ? <div><Header size='small'>Review</Header> {this.snack.review}  </div> : <div><Header size='small'>Review</Header><SnackReviewForm/></div>

    return (
      <Segment>
        <Header as='h2'>{this.snack.name}</Header>
        <Button size='mini'>edit</Button> <Button size='mini'>delete</Button>
         <Divider />
        <div><Header size='small'>Flavor Profile</Header> {this.snack.type}</div>
         <Divider />
          {rating}
         <Divider />
          {review}

      </Segment>
    )
  }

  }
}


const mapStateToProps = (state) => {
  return {
    snacks: state.snacks
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     currentSnack,
//   }, dispatch)
// }


export default connect(mapStateToProps, null)(Snack)
