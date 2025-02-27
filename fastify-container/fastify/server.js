import Fastify from 'fastify';
import routes from "./routes/routes.js"

const fastify = Fastify({
	logger: true
});

// const { ADDRESS = 'localhost', PORT = '3000' } = process.env;

const ADDRESS = process.env.ADDRESS;
const PORT = process.env.PORT;

// Registering routes from routes.js
fastify.register(routes);

fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) }, (err, address) => {
	console.log(`PORT : ${PORT}`)
	console.log(`ADDRESS : ${ADDRESS}`)
	console.log(`env : ${process.env}`)

	if (err)
	{
		console.error(err)
		process.exit(1)
	}
  console.log(`Server listening at ${address}`)
});
