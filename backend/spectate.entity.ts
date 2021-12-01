import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import { User } from './user.interface.ts';

@Entity
class Game {

  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public user1: User;

  @Column()
  public user1_score: number;

  @Column()
  public user2: User;

  @Column()
  public user2_score: number;

  @Column()
  public started: number;

//  @Column()
//  public ended: string;

  @Column()
  public winner: User;

  @Column()
  public url: string;

}
