import './App.css';
import {Redirect, Route} from "react-router-dom";
import Front from "./components/Front/Front";
import Panel from "./components/Panel/Panel";

const App = (props) => {

	let state = props.state;

	return (
		<>
			<Route exact path='/'>
				<Redirect to='/front'/>
			</Route>
			<Route path='/front' render={() => <Front state={state.front}/>}/>
			<Route path='/panel' render={() => <Panel state={{...state.panel, account: state.account}}/>}/>
		</>
	);
}

export default App;
