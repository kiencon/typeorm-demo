import { Connection } from 'typeorm';
import getConnection from './typeOrmConnection';

const migrate = async (): Promise<void> => {
  try {
    const cnn: Connection = await getConnection();
    console.log(cnn.migrations);
    const result = await cnn.runMigrations();
    console.log('migration ok', result);
    process.exit(0);
  } catch (error) {
    Promise.reject(error);
  }
};

migrate();
