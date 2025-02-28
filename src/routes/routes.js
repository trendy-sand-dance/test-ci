async function routes (fastify, options) {
	fastify.get('/', async (request, reply) => 
		{
			return "Home";
		});

	fastify.get('/login', async (request, reply) => 
		{
			return "Login";
		});
}

export default routes;
