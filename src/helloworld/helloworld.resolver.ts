import { Query, Resolver, Args, Int } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String, {
    description: 'A simple Hello World',
    name: 'helloWorld',
  })
  helloWorld(): string {
    return 'Hello World! This is a GraphQL API built with NestJS.';
  }

  @Query(() => Number, { name: 'random' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description:
      'Returns a random number from 0 to the max value provided as argument',
  })
  getRandomNumberFromZeroTo(
    @Args('max', { nullable: true, type: () => Int }) max: number = 6,
  ): number {
    return Math.floor(Math.random() * max);
  }
}
