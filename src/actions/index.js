import snacks from '../snacks'

export function changeSnack(){
  return {
    type: "CHANGE_SNACK"
  }
}

export function addSnack(snack){
  return {
    type: "ADD_SNACK",
    payload: snack["snack"]
  }
}
