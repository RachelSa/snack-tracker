import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSnack } from '../actions'
import { Button } from 'semantic-ui-react'

export class Navbar extends React.Component {
   handleOnClick = () => {
      this.props.changeSnack()
    }

  render(){
    return (
      <div>
        <Button onClick={this.handleOnClick}>
          Click Me
        </Button>
        {this.props.currentSnack}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentSnack: state.currentSnack
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeSnack,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
