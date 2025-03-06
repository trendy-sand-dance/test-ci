import Fastify from 'fastify';
import routes from "./routes/routes.js"

const fastify = Fastify({
	logger: true
});

const ADDRESS = process.env.LISTEN_ADDRESS;
const PORT = process.env.LISTEN_PORT;
const STR = process.env.TEST_STR;

console.log("port: ");
console.log(PORT);
console.log("addr: ");
console.log(ADDRESS);
console.log("teststr: ");
console.log(STR);
// Registering routes from routes.js
fastify.register(routes);

fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) }, (err, address) => {
	console.log(`PORT : ${PORT}`)
	console.log(`ADDRESS : ${ADDRESS}`)

	if (err)
	{
		console.error(err)
		process.exit(1)
	}
  console.log(`Server listening at ${address}`)
});
