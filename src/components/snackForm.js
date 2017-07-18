import React from 'react'

class SnackForm extends React.Component {

  render(){
    return (
      <form>
        <label>Name</label>
        <input
          type='text'
          placeholder='cheetos'>
        </input>
        <select>
          <option value="salty">salty</option>
          <option value="sweet">sweet</option>
          <option value="other">other</option>
        </select>
        <label>Review</label>
        <input
          type='text'
          placeholder='so yummy'>
        </input>
        <label>Rating:</label>
        <input
          type='number'
          min='1'
          max='5'
          placeholder='5'>
        </input>
        <input
          type="button"
          value="submit"
          ></input>

    </form>
    )
  }
}

export default SnackForm
