import snacks from '../snacks'

export default function snackChanger(state={
  currentSnack: '', snacks: snacks
}, action) {
  console.log('hi from snack reducer')
  switch (action.type) {
    case 'CHANGE_SNACK':
      return {currentSnack: "cheetos"}
    case 'ADD_SNACK':
      console.log("this is 'add snack' from my snack reducer")
      return {snacks: [...state.snacks, action.payload]}
    case 'CURRENT_SNACK':
        return {currentSnack: action.payload}
  default:
        return state
  }
}
