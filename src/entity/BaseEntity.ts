import { Column, PrimaryGeneratedColumn } from 'typeorm';
import IEntity from './IEntity';

export default class BaseEntity implements IEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  createdAt: string;

  @Column({ type: 'timestamp' })
  updatedAt: string;
}
