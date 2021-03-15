import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { todoItems } from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todoList={todoItems} />
      <TodoForm />
    </div>
  );
}

export default App;
