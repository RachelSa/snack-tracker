import snacks from '../snacks'

export default function snackChanger(state={
  currentSnack: 'none', snacks: snacks
}, action) {
  switch (action.type) {
    case 'CHANGE_SNACK':
      return {currentSnack: "cheetos"}
    case 'ADD_SNACK':
      return {snacks: [...state.snacks, action.payload]}
  default:
        return state
  }
}
