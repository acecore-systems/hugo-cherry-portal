exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name;
  const email = event.queryStringParameters.email;
  const message = event.queryStringParameters.message;
	return {
		statusCode: 200,
		body: `Hello, ${name}, ${email}, ${message}`
	};
};