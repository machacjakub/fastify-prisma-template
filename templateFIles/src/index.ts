import Fastify from 'fastify';

const fastify = Fastify({
    logger: true // Enable basic logging
});

fastify.get('/', async (request, reply) => {
    console.log('Received a request to the root path!');
    return { message: 'Hello from the Fastify API!' };
});

const start = async () => {
    try {
        await fastify.listen(3000);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log('Server listening on port 3000');
};

start();
