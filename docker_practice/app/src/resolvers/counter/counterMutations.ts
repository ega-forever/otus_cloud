import { Ctx, Mutation } from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Counter } from '../../models/counter/Counter';
import IContext from '../../interfaces/IContext';

export default class CounterMutations {

  @InjectRepository(Counter)
  private readonly counterRepository: Repository<Counter>;

  @Mutation(returns => Boolean)
  public async increment(
    @Ctx() { req }: IContext
  ): Promise<boolean> {

    const record = await this.counterRepository.findOne({ ip: req.connection.remoteAddress });

    if (record) {
      await this.counterRepository.increment({ id: record.id }, 'count', 1);
    } else {
      await this.counterRepository.insert({ ip: req.connection.remoteAddress, count: 1 });
    }

    return true;
  }
}
