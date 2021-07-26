import { Connection, Repository } from 'typeorm';
import getConnection from '../typeOrmConnection';

async function getRepository<T>(
  ICustomRepository: new () => Repository<T>
): Promise<Repository<T>> {
  const connectionDB: Connection = await getConnection();
  const { manager } = connectionDB.createQueryRunner();
  return manager.getCustomRepository(ICustomRepository);
}

export default getRepository;
