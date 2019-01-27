export function getOperators(){
	return new Promise((resolve, reject) => {
		//Here must be request to server 
		let operators = [{
			name: 'MTS',
			systemName: 'mts',
			icon: 'http://lh3.googleusercontent.com/0_yPz4R0JrcRVo4O7-gLUOUsnW21NqEz63G_6NSnBG8O0U8Q3a2oJxGZrPEKahJjQ4g=w100'
		},{
			name: 'Beeline',
			systemName: 'beeline',
			icon: 'https://static.beeline.ru/upload/images/b2c/bee-logo/single.png'
		},{
			name: 'Megafon',
			systemName: 'megafon',
			icon: 'http://moscow.megafon.ru/ai/program/56/list_image/private-office-big.png'
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