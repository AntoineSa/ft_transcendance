import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  public id!: string & { ___brand: "userId" };

  @Column({ length: 20 })
  public username: string;

  @Column()
  password: string;

  @Column({ default: false })
  tfa: boolean;

  @Column({ nullable: true })
  public avatar: string;//url?

  @Column({ default: 0 })
  public win_number: number;

  @Column({ default: 0 })
  public lose_number: number;

}
