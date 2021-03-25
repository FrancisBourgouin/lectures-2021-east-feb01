import Commit from "./Commit";

function CommitList(props) {

  const parsedCommits = Array.isArray(props.commits) && props.commits.map(commit => <Commit key={commit.sha} {...commit} />)

  return (
    <div className="CommitList">
      {parsedCommits}
    </div>
  );
}

export default CommitList;