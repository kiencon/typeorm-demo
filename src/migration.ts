import { Connection } from 'typeorm';
import getConnection from './getConnection';

const migrate = async (): Promise<void> => {
  try {
    console.log('dirname', __dirname);
    const cnn: Connection = await getConnection();
    console.log(cnn.migrations);
    const result = await cnn.runMigrations();
    console.log('migration ok', result);
  } catch (error) {
    Promise.reject(error);
  }
};

migrate().then(() => process.exit(0));
