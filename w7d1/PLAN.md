# Todo list

## What does it do

- Needs to show a list of todos
- Show differently completed / vs imcomplete
- Text of the todo
- Add a todo with a form
- Mark as complete
- Keeping track of the todo states

## Data

const todoItems = [
  {
    name:"Does order matter?",
    completed:false
  }
]

const otherTodoItems = {
  1:{ 
    id:1,
    name:"Does order matter?",
    completed:false
  },
  2:{ 
    id:2,
    name:"Wear pants",
    completed:false
  },
  3:{ 
    id:3,
    name:"Water the plants",
    completed:false
  },
  4:{ 
    id:4,
    name:"Water the pants",
    completed:false
  },
}

## HTML skeleton

  body
    header
      h1 title of app
    main
      ul
        li
          span text of todo
          i icon of something (maybe)
      form  
        input new todo name

## Components

  App
    Header
    TodoList
      TodoListItem
    TodoForm