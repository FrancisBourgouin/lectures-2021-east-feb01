function Commit(props) {
  const avatar_url = props.author.avatar_url
  const name = props.commit.author.name
  const message = props.commit.message

  return (
    <article className="Commit">
      <img src={avatar_url} style={{ width: 20, height: 20 }} alt="avatar" />
      <h1>{message}</h1>
      <p>{name}</p>
    </article>
  );
}

export default Commit;