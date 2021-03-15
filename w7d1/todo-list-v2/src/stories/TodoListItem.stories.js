import { storiesOf } from '@storybook/react';

import TodoListItem from '../components/TodoListItem'

const completedTodo = {
  name: "Sing a song while signing a signed contract",
  completed: true
}

const incompleteTodo = {
  name: "Look at the birds outside",
  completed: false
}
storiesOf('TodoList Item', module)
  .add('Completed Todo', () => <TodoListItem {...completedTodo} />)
  .add('Incomplete Todo', () => <TodoListItem {...incompleteTodo} />)