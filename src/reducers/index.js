import { combineReducers } from 'redux'

import characters from './characters_reducer'
import heroes from './heroes_reducer'

//Combines all reducers from above then you can export them as rootReducer
const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer