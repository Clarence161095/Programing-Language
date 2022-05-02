import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import Card from './Card';
import User from './User';

@Entity()
class Sample extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user: User) => user.samples)
  user: User;

  @ManyToMany(() => Card, (card) => card.samples)
  @JoinTable()
  cards: Card[];

  @Column('text')
  content: string;

  @Column('text')
  description: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}

export default Sample;
