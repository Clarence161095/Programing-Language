import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import Card from './Card';
import Sample from './Sample';
import Set from './Set';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  displayName: string;

  @Column()
  email: string;

  @Column()
  photoURL: string;

  @Column({ default: 'normal' })
  role: string;

  @Column()
  age: number;

  @OneToMany(() => Set, (set: Set) => set.user)
  sets: Set[];

  @OneToMany(() => Card, (card: Card) => card.user)
  cards: Card[];

  @OneToMany(() => Sample, (sample: Sample) => sample.user)
  samples: Sample[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}

export default User;
