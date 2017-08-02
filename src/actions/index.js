import snacks from '../snacks'

export function changeSnack(){
  return {
    type: "CHANGE_SNACK"
  }
}

export function addSnack(snack){
  let preparedSnack = snack["snack"]
  preparedSnack["id"] = snacks.length + 1
  return {
    type: "ADD_SNACK",
    payload: preparedSnack
  }
}

export function currentSnack(snack){
  return {
    type: "CURRENT_SNACK",
    payload: snack
  }
}

export function editSnack(snack){
  return {
    type: "EDIT_SNACK",
    payload: snack
  }
}
