import { Ctx, Mutation, Query } from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Counter } from '../../models/counter/Counter';
import IContext from '../../interfaces/IContext';

export default class CounterQuery {

  @InjectRepository(Counter)
  private readonly counterRepository: Repository<Counter>;

  @Query(returns => Number)
  public async getCount(
    @Ctx() { req }: IContext
  ): Promise<number> {
    const record = await this.counterRepository.findOne({ ip: req.connection.remoteAddress });
    return record ? record.count : 0;
  }
}
