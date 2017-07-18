export default function snackChanger(state={
  currentSnack: 'none'
}, action) {
  switch (action.type) {
    case 'CHANGE_SNACK':
      console.log('currentSnack updating...')
      return {currentSnack: "cheetos"}
  default:
        return state
  }
}
