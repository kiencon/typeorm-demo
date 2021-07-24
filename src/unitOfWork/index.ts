// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Connection, EntityManager, QueryRunner, Repository } from 'typeorm';
import getConnection from '../getConnection';

export default class UnitOfWork {
  private queryRunner: QueryRunner;

  private transactionManager: EntityManager;

  static connectionDB: Connection;

  private async init(): Promise<void> {
    if (UnitOfWork.connectionDB) return;
    UnitOfWork.connectionDB = await getConnection();
    this.queryRunner = UnitOfWork.connectionDB.createQueryRunner();
  }

  setTransactionManager(): void {
    this.transactionManager = this.queryRunner.manager;
  }

  async startTransaction(): Promise<void> {
    await this.init();
    await this.queryRunner.startTransaction();
    this.setTransactionManager();
  }

  async start(): Promise<void> {
    await this.init();
    this.setTransactionManager();
  }

  async complete(work: () => Promise<void>): Promise<void> {
    try {
      await work();
      await this.queryRunner.commitTransaction();
    } catch (error) {
      await this.queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await this.queryRunner.release();
    }
  }

  getRepository<T>(IEntity: new () => T): Repository<T> {
    if (!this.transactionManager) {
      throw new Error('Unit of work is not started. Call the start() method');
    }
    return this.queryRunner.manager.getRepository(IEntity);
  }
}
