axios
  .get(`https://api.github.com/repos/${user}/${repo}/commits`)
  .then(res => ...)