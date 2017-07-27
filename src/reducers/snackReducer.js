import snacks from '../snacks'

export default function snackChanger(state={
  currentSnack: '', snacks: snacks
}, action) {
  switch (action.type) {
    case 'CHANGE_SNACK':
      return {currentSnack: "cheetos"}
    case 'ADD_SNACK':
      return {snacks: [...state.snacks, action.payload]}
    case 'CURRENT_SNACK':
    console.log('hey from current snack reducer', action.payload)
        return {currentSnack: action.payload}
  default:
      console.log("hey from default reducer")
        return state
  }
}
