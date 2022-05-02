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
import Sample from './Sample';
import Set from './Set';
import User from './User';

@Entity()
class Card extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user: User) => user.cards)
  user: User;

  @ManyToMany(() => Set, (set: Set) => set.cards)
  @JoinTable()
  sets: Set[];

  @ManyToMany(() => Sample, (sample: Sample) => sample.cards)
  @JoinTable()
  samples: Sample[];

  @Column('text')
  term: string;

  @Column('text')
  define: string[];

  @Column('text')
  hiragana: string;

  @Column('text')
  kanji: string;

  @Column('text')
  sample: string;

  @Column('int4')
  process: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}

export default Card;
