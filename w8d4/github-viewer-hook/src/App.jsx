import { useEffect, useState } from 'react';
import axios from 'axios'

import RepoForm from './components/RepoForm';
import CommitList from './components/CommitList';

import './App.css';
import useGithubAPI from './hooks/useGithubAPI';

function App() {
  // const [repoInfo, setRepoInfo] = useState(null)
  // const [commits, setCommits] = useState(null)

  // useEffect(() => {
  //   if (repoInfo) {
  //     axios
  //       .get(`https://api.github.com/repos/${repoInfo.user}/${repoInfo.repoName}/commits`)
  //       .then(res => setCommits(res.data))
  //   }
  // }, [repoInfo])

  const { commits, setRepoInfo } = useGithubAPI()

  return (
    <div className="App">
      <RepoForm onSubmit={setRepoInfo} />
      {commits && <CommitList commits={commits} />}
    </div>
  );
}

export default App;
