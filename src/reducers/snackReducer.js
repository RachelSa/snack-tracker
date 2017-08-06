import snacks from '../snacks'

export default function snackChanger(state={
  currentSnack: 'hi', snacks: snacks
}, action) {
  switch (action.type) {
    case 'CHANGE_SNACK':
      return {currentSnack: "cheetos"}
    case 'ADD_SNACK':
      return {snacks: [...state.snacks, action.payload]}
    case 'EDIT_SNACK':
      let updatedSnacks = updateSnacks(state.snacks, action.payload.snack)
        return { snacks: updatedSnacks }
    case 'SET_SNACK':
          return {currentSnack: action.payload}
    case 'DELETE_SNACK':
      let remainingSnacks = filterSnacks(state.snacks, action.payload)
        return {snacks: remainingSnacks}
  default:
        return state
  }
}

function filterSnacks(snacks, snackToDelete){
  return snacks.filter(snack => {
    return snack.name !== snackToDelete
  })
}

function updateSnacks(snacks, updatedSnack){
  return snacks.map(snack => {
    if (snack.name === updatedSnack.name){
      updatedSnack.id = snack.id
      return updatedSnack
    }
    else { return snack }
  })
}
