import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import rootReducer from './reducers'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { addCharacterById} from './actions'

const store = createStore(rootReducer);
//console.log('store.getState()', store.getState())
//test the store before it goes out
store.subscribe(() => console.log('store', store.getState()))
store.dispatch(addCharacterById(2));


ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, 
    document.getElementById('root')
)