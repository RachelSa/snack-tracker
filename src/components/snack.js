import React from 'react'
import SnackRatingForm from './snackRatingForm'
import SnackReviewForm from './snackReviewForm'
import { Link, Route } from 'react-router-dom'
import { Segment, Divider, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Snack = (props) => {
  let snackName = props.match.params.snackName
  const snack = props.snacks.find(snack => snack.name === snackName)
  const rating = snack.rating ? <div><Header size='small'>Rating</Header> {snack.rating} </div> : <div><Header size='small'>Rating</Header><SnackRatingForm/></div>
  const review = snack.review ? <div><Header size='small'>Review</Header> {snack.review}  </div> : <div><Header size='small'>Review</Header><SnackReviewForm/></div>

  return (
    <Segment>
      <Header as='h2'>{snack.name}</Header>
       <Divider />
      <div><Header size='small'>Flavor Profile</Header> {snack.type}</div>
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

const mapStateToProps = (state) => {
  return {
    snacks: state.snacks
  }
}

export default connect(mapStateToProps, null)(Snack)
