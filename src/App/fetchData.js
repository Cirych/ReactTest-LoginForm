export default (data) => {
	if (self.fetch) {
		const headers = new Headers({
			"Content-Type": "application/json"
		});

		const init = {
			method: 'POST',
			headers: headers,
			mode: 'cors',
			body: JSON.stringify(data)
		};

		const request = new Request('http://localhost:1080/login', init);


		return fetch(request)
			.then((response) => response)
			.then((response) => response.json())
			.catch((error) => error);
	} else {
		return 'error2';
	}
}

/*
return fetch(request)
	.then((response) =>
		(response.status !== 200)
			? 'error1 ' + response.ok
			: response.json().then((data) => data))
	.catch((error) => ('err:'+error));
*/