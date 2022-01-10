import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../user/user.entity';

@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string & { ___brand: "gameId" };

//  @OneToOne(type => User)
//  @JoinColumn()
  @Column({ type: 'uuid' })
  public user1: User["id"];

  @Column({ type: 'smallint', default: 0 })
  public user1_score: number;

//  @OneToOne(type => User)
//  @JoinColumn()
  @Column({ type: 'uuid', nullable: true })
  public user2: User["id"];

  @Column({ type: 'smallint', default: 0 })
  public user2_score: number;

  @Column({ nullable: true })
  public ended: Date;

//  @OneToOne(type => User)
//  @JoinColumn()
  @Column({ type: 'uuid', nullable: true })
  public winner: string;

}
