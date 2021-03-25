import { Component } from 'react'

class RepoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { user: "", repoName: "" }

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ ...this.state, [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    const { handleSubmit, handleChange, state } = this
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="user"
          type="text"
          placeholder="Enter the username"
          onChange={handleChange}
          value={state.user}
        />
        <input
          name="repoName"
          type="text"
          placeholder="Enter the repo name"
          onChange={handleChange}
          value={state.repoName}
        />
        <button type="submit">Fetch the commits!</button>
      </form>
    )
  }
}

export default RepoForm;