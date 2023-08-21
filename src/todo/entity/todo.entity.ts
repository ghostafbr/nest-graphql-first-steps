import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Todo {
  @Field(() => Int, { description: 'Unique identifier for the todo' })
  id: number;
  @Field(() => String, { description: 'Title of the todo' })
  description: string;
  @Field(() => Boolean, { description: 'Is the todo done?' })
  done: boolean = false;
}
