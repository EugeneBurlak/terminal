export function getOperators(){
	
	//Here must be request to server 
	let operators = [{
		name: 'MTS',
		systemName: 'mts'
	},{
		name: 'Beeline',
		systemName: 'beeline'
	}];

	return new Promise((resolve, reject) => {
		resolve(operators);
	});
}

export function setOperators(operators){
	return {
		type: 'SET_OPERATORS',
		payload: {
			operators: operators
		}
	}
}