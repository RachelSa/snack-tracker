import React from 'react'
import { Segment, Divider, Header} from 'semantic-ui-react'
import SelectViewButtons from './detailView/selectViewButtons'
import { connect } from 'react-redux'

//not getting new props
class SnackView extends React.Component {


  render(){
    const rating = this.props.currentSnack.rating ? <div><Header size='small'>Rating</Header> {this.props.currentSnack.rating} / 3 </div> : <div><Header size='small'>Rating</Header>no rating yet 😐</div>
    const review = this.props.currentSnack.review ? <div><Header size='small'>Review</Header> {this.props.currentSnack.review}  </div> : <div><Header size='small'>Review</Header>no review yet 😐</div>
    return (
      <Segment>
        <Header as='h2'>{this.props.currentSnack.name}</Header>

        <SelectViewButtons handleChange={this.props.handleChange} />

        <Divider />
        <div><Header size='small'>Flavor Profile</Header>{this.props.currentSnack.type}</div>
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
