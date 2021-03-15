import { storiesOf } from '@storybook/react';
import TodoList from '../components/TodoList'


const list = [
  {
    name: "Sing a song while signing a signed contract",
    completed: true
  },
  {
    name: "Look at the birds outside",
    completed: false
  }
]

storiesOf('Todo List', module)
  .add('populated list', () => <TodoList todoList={list} />)
  .add('empty list', () => <TodoList todoList={[]} />)
  .add('invalid list', () => <TodoList todoList={{}} />)
  .add('forgotten list', () => <TodoList />)



  // <SomeComponent bob={1} bub={2} bab={3} />

  // props => {bob:1, bub:2, bab:3}