import Fastify from 'fastify';
import routes from "./routes/routes.js"

const fastify = Fastify({
	logger: true
});

const { ADDRESS = 'localhost', PORT = '3000' } = process.env;

// Registering routes from routes.js
fastify.register(routes);

fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) }, (err, address) => {
	if (err)
	{
		console.error(err)
		process.exit(1)
	}
  console.log(`Server listening at ${address}`)
});
