import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { counterResolvers } from './counter';

export const createSchema = (extra = []) => {
  return buildSchema({
    container: Container,
    resolvers: [
      ...extra,
      ...counterResolvers
    ]
  });
};
