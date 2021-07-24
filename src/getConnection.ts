import { Connection, createConnection } from 'typeorm';
import * as Entities from './entity';

const getEntities = (): any[] => Object.values(Entities);

const getConnection = (): Promise<Connection> =>
  createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
    synchronize: false,
    migrationsRun: false,
    migrations: [`${__dirname}/migration/*.ts`],
    logging: false,
    entities: getEntities()
  });

export default getConnection;
