import {applyMiddleware, combineReducers, createStore} from "redux";
import optionsReducer from "../components/reducers/options-reducer";
import accountReducer from "../components/reducers/account-reducer";
import frontReducer from "../components/reducers/front-reducer";
import accountsReducer from "../components/reducers/accounts-reducer";
import thunk from "redux-thunk";
import authReducer from "../components/reducers/auth-reducer";

let reducers =
	combineReducers({
		auth: authReducer,
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