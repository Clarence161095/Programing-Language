import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const PostgresDB = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [__dirname, 'src/entity/**/*.ts'],
  migrations: [__dirname, 'src/migration/**/*.ts'],
  subscribers: [],
});
