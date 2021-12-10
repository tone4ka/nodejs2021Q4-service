const { PORT } = require('./common/config');
const fastify = require('./fastifyApp');


const start = async () => {
  try {
    await fastify.listen(PORT);
    console.log(`App is running on http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
