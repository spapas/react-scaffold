import { ui, filters } from './reducers'

import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers, compose  } from 'redux'
import { reducer as formReducer} from 'redux-form';


const reducer = combineReducers(Object.assign({}, { 
        ui, filters
    }, {
        form: formReducer
    })
)


const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store