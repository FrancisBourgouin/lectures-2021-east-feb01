import React, { Component } from 'react'
import RepoForm from './components/RepoForm';
import axios from 'axios'
import './App.css';
import Spy from './components/Spy';

class App extends Component {
  constructor() {
    super()
    this.state = {
      repoData: null,
      commits: null,
      spyFound: false
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const oldRepoData = prevState.repoData
    const newRepoData = this.state.repoData

    if (newRepoData) {
      if (!oldRepoData || oldRepoData.user !== newRepoData.user || oldRepoData.repoName !== newRepoData.repoName) {
        console.log('STATE CHANGED!')
        axios
          .get(`https://api.github.com/repos/${newRepoData.user}/${newRepoData.repoName}/commits`)
          .then(res => this.addCommitData(res.data))
      }
    }
  }

  addRepoData = (repoFormInfo) => {
    this.setState({ ...this.state, repoData: repoFormInfo })
  }
  addCommitData = commitList => {
    this.setState({ ...this.state, commits: commitList })
  }
  sleepWithTheFishes = () => {
    this.setState({ ...this.state, spyFound: true })
  }
  render() {
    return (
      <div className="App">
        I AM A CLASS
        <RepoForm onSubmit={this.addRepoData} />
        {!this.state.spyFound && <Spy sleepWithTheFishes={this.sleepWithTheFishes} />}
      </div>
    )
  }
}

export default App;
