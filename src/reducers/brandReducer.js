
export default function brandReducer(state={currentUser: ''}, action) {
  console.log('hi from brand reducer')
  switch (action.type) {
    case 'ADD_SNACK':
        console.log("this is 'add snack' from my brand reducer")
        return state
  default:
        return state
  }
}
