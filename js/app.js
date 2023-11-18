fetch("https://api.apispreadsheets.com/data/MoG5v7k3A9GbXAjv/", {
	method: "POST",
	body: JSON.stringify({"data": {"name":"","email":"","phone":"","surname":"","middleName":"","additionalInformation":""}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})
