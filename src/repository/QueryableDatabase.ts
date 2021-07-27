import { Connection, QueryRunner, Repository } from 'typeorm';
import getConnection from '../typeOrmConnection';

export default class QueryableDatabase {
  private connection: Connection;

  private queryRunner: QueryRunner;

  protected async init(): Promise<void> {
    this.connection = await getConnection();
    this.queryRunner = this.connection.createQueryRunner();
  }

  public getCustomRepository<T>(
    ICustomRepository: new () => Repository<T>
  ): Repository<T> {
    return this.queryRunner.manager.getCustomRepository(ICustomRepository);
  }

  public async handle(work: any): Promise<any> {
    let result;
    let isError = false;
    try {
      await this.init();
      result = await work();
    } catch (error) {
      result = error;
      isError = true;
    } finally {
      await this.queryRunner.release();
    }
    if (isError) {
      throw result;
    }
    return result;
  }
}
