import {applyMiddleware, combineReducers, createStore} from "redux";
import optionsReducer from "../components/reducers/options-reducer";
import accountReducer from "../components/reducers/account-reducer";
import frontReducer from "../components/reducers/front-reducer";
import accountsReducer from "../components/reducers/accounts-reducer";
import thunk from "redux-thunk";

let reducers =
	combineReducers({
		account: accountReducer,
		front: frontReducer,
		panel: combineReducers({
			accounts: accountsReducer,
			options: optionsReducer
		})
	});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;