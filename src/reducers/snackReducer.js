import snacks from '../snacks'

export default function snackChanger(state={
  currentSnack: '', snacks: snacks
}, action) {
  switch (action.type) {
    case 'ADD_SNACK':
      return {snacks: [...state.snacks, action.payload], currentSnack: action.payload }
    case 'EDIT_SNACK':
      let updatedSnacks = updateSnacks(state.snacks, action.payload.snack)
        return { currentSnack: state.currentSnack, snacks: updatedSnacks }
    case 'SET_SNACK':
      return {snacks: state.snacks, currentSnack: action.payload}
    case 'DELETE_SNACK':
      let remainingSnacks = filterSnacks(state.snacks, action.payload)
        return {snacks: remainingSnacks, currentSnack: ''}
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
