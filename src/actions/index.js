export const ADD_CHARACTER = 'ADD_CHARACTER'

//action creators 
export function addCharacterById(id){
    const action = {
        type: ADD_CHARACTER,
        id
    }
    return action
}