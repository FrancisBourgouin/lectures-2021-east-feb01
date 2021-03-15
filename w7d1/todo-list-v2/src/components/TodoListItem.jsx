export default function TodoListItem(props) {
  const { name, completed } = props
  return (
    <li>
      <span>{name}</span>
      {completed && <i style={{ marginLeft: '1em' }}>Completed</i>}
    </li>
  )
}