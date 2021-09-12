let initialState = {
	page: {
		id: 10,
		name: 'about',
		content: 'Page content'
	},
	header: {
		menu: [
			{id: 10, name: 'about'},
			{id: 31, name: 'contacts'}
		]
	}
};

const frontReducer = (state = initialState, action) => {
	return state;
}

export default frontReducer;