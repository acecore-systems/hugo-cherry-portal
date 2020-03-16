exports.handler = async (event, context) => {
  const userdb =  [{'email':'gai@mist.jp','password':'testpass'},{'email':'test@mist.jp','password':'testpass'}]

  const email = event.queryStringParameters.email;
  const password = event.queryStringParameters.password;
  const data = { 'email': email, 'password': password }
  
  let seccuer = false

  if (userdb.indexOf(data) >= 0) {
    seccuer = true
	}

	return {
		statusCode: 200,
		body: `seccuer=${seccuer}`
	};
};
