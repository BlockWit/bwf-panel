import {FETCH_OPTIONS_STARTED, FETCH_OPTIONS_SUCCESS} from "../../actions/options";

let initialState = {
	loading: false,
	items: []
};

const optionsReducer = (state = initialState, action) => {
	if (action.type === FETCH_OPTIONS_SUCCESS) {
		return {
			...state,
			loading: false,
			items: action.payload
		};
	} else if (action.type === FETCH_OPTIONS_STARTED) {
		return {
			...state,
			loading: true
		};
	}
	return state;
}

export default optionsReducer;