import TodoListItem from './TodoListItem'

export default function TodoList(props) {
  // const todoList = props.todoList
  const { todoList } = props
  // const accumulator = []
  // for (const todo of todoList) {
  //   accumulator.push(<TodoListItem />)
  // }
  // console.log(accumulator)

  const parsedTodoList = Array.isArray(todoList) && todoList.map(todo => <TodoListItem key={todo.id} {...todo} />)
  console.log(parsedTodoList)
  return (
    <ul>
      {parsedTodoList}
      {parsedTodoList && parsedTodoList.length === 0 && <li>Add elements to the todo list</li>}
      {!parsedTodoList && <span>Looks like there is something wrong with the list</span>}
    </ul>
  )
}

// TodoList({todoList:[1,2,3,4,5]})


// const multiply = (a,b) => a * b
// const multiply = (a,b, c ,d , e ,f ) => a * b
// const multiply = (numberList) => numberList.reduce...

// $.ajax({
//   url:"",
//   method:"",
//   data,
// })

// ajax(paramObj)