const ACTION_ADD_ACCOUNTS = 'ACTION_ADD_ACCOUNTS';

export const addAccountsActionCreator = (accounts) => ({
	type: ACTION_ADD_ACCOUNTS,
	accounts: accounts
});

let initialState = [];

const accountsReducer = (state = initialState, action) => {
	if (action.type === ACTION_ADD_ACCOUNTS) {
		return [...action.accounts];
	}
	return state;
}

export default accountsReducer;