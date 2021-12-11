import { PORT } from'./common/config';
import server from './fastifyApp';



const start = async (): Promise<void> => {
  try {
    await server.listen(PORT);
    console.log(`App is running on http://localhost:${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
