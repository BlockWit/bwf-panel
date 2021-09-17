import {applyMiddleware, combineReducers, createStore} from "redux";
import accountReducer from "../components/reducers/account-reducer";
import thunk from "redux-thunk";
import authReducer from "../components/reducers/auth-reducer";

let reducers =
	combineReducers({
		auth: authReducer,
		account: accountReducer
	});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;