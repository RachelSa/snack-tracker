import React from 'react'
import SnackRatingForm from './snackRatingForm'
import SnackReviewForm from './snackReviewForm'
import { Route } from 'react-router-dom'
import { Segment, Divider, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import { currentSnack } from '../actions'

class Snack extends React.Component {
  constructor(props){
    super(props)
    this.snack = this.props.snacks[0]
  }

  componentWillUpdate(nextProps) {
    let snackName = this.props.match.params.snackName
    this.snack = this.props.snacks.find(snack => snack.name === snackName)
  }



render(){
  const rating = this.snack.rating ? <div><Header size='small'>Rating</Header> {this.snack.rating} </div> : <div><Header size='small'>Rating</Header><SnackRatingForm/></div>
  const review = this.snack.review ? <div><Header size='small'>Review</Header> {this.snack.review}  </div> : <div><Header size='small'>Review</Header><SnackReviewForm/></div>

  console.log('hey from snack render')
  return (
    <Segment>
      <Header as='h2'>{this.snack.name}</Header>
       <Divider />
      <div><Header size='small'>Flavor Profile</Header> {this.snack.type}</div>
       <Divider />
        {rating}
       <Route
         path="/snacks/:snackName/edit/rating" component={SnackRatingForm}
       />
       <Divider />
        {review}
       <Route
         path="/snacks/:snackName/edit/review" component={SnackReviewForm}
       />
    </Segment>
  )
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
