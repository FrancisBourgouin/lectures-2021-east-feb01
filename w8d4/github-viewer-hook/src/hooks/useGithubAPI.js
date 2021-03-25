import { useState, useEffect } from 'react'
import axios from 'axios'
export default function useGithubAPI() {
  const [repoInfo, setRepoInfo] = useState(null)
  const [commits, setCommits] = useState(null)

  useEffect(() => {
    if (repoInfo) {
      axios
        .get(`https://api.github.com/repos/${repoInfo.user}/${repoInfo.repoName}/commits`)
        .then(res => setCommits(res.data))
    }
  }, [repoInfo])

  return { commits, setRepoInfo }
}