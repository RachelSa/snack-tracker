
export default function snackChanger(state={
  currentUser: ''}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {currentUser: "WayChill"}
  default:
        return state
  }
}
