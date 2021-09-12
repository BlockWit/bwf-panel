import {addAccountsActionCreator} from "../../reducers/accounts-reducer";
import Accounts from "./Accounts";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
	accounts: state.panel.accounts
})

let mapDispatchToProps = (dispatch) => ({
	addAccounts: (accounts) => {
		dispatch(addAccountsActionCreator(accounts));
	},
})

const AccountsContainer = connect(mapStateToProps, mapDispatchToProps)(Accounts);

export default AccountsContainer;

