import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Counter {
  @Field()
  @PrimaryGeneratedColumn()
  public id: number;

  @Index()
  @Field()
  @Column()
  public ip: string;

  @Field()
  @Column({ default: 0 })
  public count: number;

}
