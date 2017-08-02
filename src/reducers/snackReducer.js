import snacks from '../snacks'

export default function snackChanger(state={
  currentSnack: '', snacks: snacks
}, action) {
  console.log('hi from snack reducer')
  switch (action.type) {
    case 'CHANGE_SNACK':
      return {currentSnack: "cheetos"}
    case 'ADD_SNACK':
      console.log("this is 'add snack' from my snack reducer", state.snacks)
      return {snacks: [...state.snacks, action.payload]}
    case 'EDIT_SNACK':
      let updatedSnacks = state.snacks.map(snack => {
        if (snack.name === action.payload.snack.name){
          action.payload.snack.id = snack.id
          return action.payload.snack

        }
        else { return snack }
      })
        return { snacks: updatedSnacks }
    case 'CURRENT_SNACK':
        return {currentSnack: action.payload}
  default:
        return state
  }
}
