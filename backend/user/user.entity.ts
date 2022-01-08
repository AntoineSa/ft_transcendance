import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  public id: number;

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
