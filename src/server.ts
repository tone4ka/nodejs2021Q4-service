import config from'./common/config';
import server from './fastifyApp';

 const {PORT} = config;

const start = async (port: string | number) => {
  try {
    await server.listen(port);
    console.log(`App is running on http://localhost:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start(PORT || 3000);
