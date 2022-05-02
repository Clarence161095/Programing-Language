import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Sample extends BaseEntity {
  // Own info
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ type: String })
  @Column({ nullable: false, type: String })
  content: string;

  @ApiProperty({ type: String })
  @Column({ nullable: true, type: String })
  description: string;

  // Relationship
  @ApiProperty({ type: String })
  @Column({ nullable: false, type: 'uuid' })
  card_id: string;

  @ApiProperty({ type: String })
  @Column({ nullable: false, type: 'uuid' })
  user_id: string;

  // Auto Generations properties
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
