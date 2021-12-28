import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column({ length: 20 })
  public username: string;

  @Column()
  private password: string;

  @Column()
  private tfa: boolean;

  @Column()
  public avatar: string;//url?

  @Column()
  public url: string;

//  @Column()
//  public game_history: Game[];

  @Column({ default: 0 })
  public win_number: number;

  @Column()
  public lose_number: number;

}
