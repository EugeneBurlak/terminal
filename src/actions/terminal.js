export function getOperators(){
	return new Promise((resolve, reject) => {
		//Here must be request to server 
		let operators = [{
			name: 'MTS',
			systemName: 'mts',
			icon: 'https://g-1.limited/images/002/480/888/2480888/1689x/mts.png'
		},{
			name: 'Beeline',
			systemName: 'beeline',
			icon: 'http://verstka.weblandgroup.com/uzcard/images/beelinelogo.png'
		},{
			name: 'Megafon',
			systemName: 'megafon',
			icon: 'http://chini-taun.ru/uploads/admin/images/devices/TOy4nmc3NE3MBN6.png'
		}];
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

export function sendRequest(data){
	return new Promise((resolve, reject) => {
		// Here must be request to server
		let rand = Math.round(Math.random());
		// Imulate delay for response from server
		setTimeout(() => {
			if(rand){
				resolve({
					text: 'Success'
				});
			}
			else{
				reject({
					text: 'Server is busy, please try later'
				});
			}
		}, 1000);
	})
}