import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Game {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @OneToOne(type => User)
  @JoinColumn()
  public user1: User;

  @Column({ type: 'smallint', default: 0 })
  public user1_score: number;

  @OneToOne(type => User)
  @JoinColumn()
  public user2: User;

  @Column({ type: 'smallint', default: 0 })
  public user2_score: number;

  @CreateDateColumn()
  public started: Date;

  @Column({ nullable: true })
  public ended: Date;

  @OneToOne(type => User)
  @JoinColumn()
  public winner: User;

  @Column()
  public url: string;

}
