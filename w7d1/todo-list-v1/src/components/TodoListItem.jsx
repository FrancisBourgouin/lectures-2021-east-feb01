export default function TodoListItem(props) {
  const { name, completed } = props
  return (
    <li>
      <span>{name}</span>
      {completed && <i>Completed</i>}
    </li>
  )
}