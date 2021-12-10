import { PORT } from'./common/config';
import fastifyApp from './fastifyApp';
import config from './common/config';


const start = async (): Promise<void> => {
  try {
    await fastifyApp.listen(PORT);
    console.log(`App is running on http://localhost:${PORT}`);
  } catch (err) {
    fastifyApp.log.error(err);
    process.exit(1);
  }
};
start();
