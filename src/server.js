const { PORT } = require('./common/config');
// const app = require('./app');
const fastify = require('./fastifyApp');

// app.listen(PORT, () =>
//   console.log(`App is running on http://localhost:${PORT}`)
// );

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
