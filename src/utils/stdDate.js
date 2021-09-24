const stdDate = value => {
	const date = new Date(value * 1000);
	return date.getDay().toString().padStart(2, '0') + '.' +
		date.getMonth().toString().padStart(2, '0') + '.' +
		date.getFullYear() + ' ' +
		date.getHours().toString().padStart(2, '0') + ':' +
		date.getMinutes().toString().padStart(2, '0')
}

export default stdDate;