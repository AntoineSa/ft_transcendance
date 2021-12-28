import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Game {

  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @OneToOne(type => User)
  @JoinColumn()
  public user1: User;

  @Column({ type: 'smallint' })
  public user1_score: number;

  @OneToOne(type => User)
  @JoinColumn()
  public user2: User;

  @Column({ type: 'smallint' })
  public user2_score: number;

//  @Column({ type: 'timestampz', default: ()=> 'CURRENT_TIMESTAMP' })
  @Column()
  public started: Date;

//  @Column()
//  public ended: Date;

  @OneToOne(type => User)
  @JoinColumn()
  public winner: User;

  @Column()
  public url: string;

}
