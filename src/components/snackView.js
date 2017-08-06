import React from 'react'
import { Segment, Divider, Header} from 'semantic-ui-react'
import SelectViewButtons from './detailView/selectViewButtons'
import { connect } from 'react-redux'

//not getting new props
class SnackView extends React.Component {

  // componentWillReceiveProps(nextProps){
  //   debugger
  // }

  render(){
    console.log(this.props.snack)
    const rating = this.props.rating ? <div><Header size='small'>Rating</Header> {this.snack.rating} / 3 </div> : <div><Header size='small'>Rating</Header>no rating yet 😐</div>
    const review = this.props.review ? <div><Header size='small'>Review</Header> {this.snack.review}  </div> : <div><Header size='small'>Review</Header>no review yet 😐</div>
    return (
      <Segment>
        <Header as='h2'>{this.props.snack.name}</Header>

        <SelectViewButtons handleChange={this.props.handleChange} />

        <Divider />
        <div><Header size='small'>Flavor Profile</Header>{this.props.snack.type}</div>
        <Divider />
        {rating}
        <Divider />
        {review}

      </Segment>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    snacks: state.snackReducer.snacks || [],
    brand: state.brandReducer,
    currentSnack: state.snackReducer.currentSnack
  }
}

export default connect(mapStateToProps, null)(SnackView)
