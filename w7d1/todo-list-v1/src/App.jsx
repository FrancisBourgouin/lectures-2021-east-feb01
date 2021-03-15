import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import { todoItems } from './data'
import './App.css';

function App() {
  const todoList = Object.values(todoItems)
  return (
    <div className="App">
      <Header />
      <TodoList todoList={todoList} />
      {/* <TodoList /> */}
      {/* {TodoList({todoList})} */}
      <TodoForm />
    </div>
  );
}

export default App;
