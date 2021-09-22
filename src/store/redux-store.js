import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "../components/reducers/auth-reducer";

let reducers =
	combineReducers({
		auth: authReducer
	});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;