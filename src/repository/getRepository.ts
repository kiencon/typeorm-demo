import { Repository } from 'typeorm';
import getConnection from '../getConnection';

async function getRepository<T>(IEntity: new () => T): Promise<Repository<T>> {
  const cnn = await getConnection();
  return cnn.getRepository(IEntity);
}

export default getRepository;
