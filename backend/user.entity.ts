import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column()
  private password: string;

  @Column()
  private tfa: boolean;

  @Column()
  public avatar: string;//url?

  @Column()
  public url: string;

  @Column()
  public game_history: Game[];

  @Column()
  public win_number: number;

  @Column()
  public lose_number: number;

}

export default User;
