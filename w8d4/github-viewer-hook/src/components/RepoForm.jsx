import { useState } from 'react'

function RepoForm(props) {
  const [formData, setFormData] = useState({
    user: "",
    repoName: ""
  })

  const handleChange = (event) => {
    const { value, name } = event.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit(formData)
    setFormData({
      user: "",
      repoName: ""
    })
  }
  return (
    <form className="RepoForm" onSubmit={handleSubmit}>
      <input type="text" name="user" placeholder="Enter the username" value={formData.user} onChange={handleChange} />
      <input type="text" name="repoName" placeholder="Enter the repo name" value={formData.repoName} onChange={handleChange} />
      <button type="submit">Fetch the github thingy!</button>
    </form>
  );
}

export default RepoForm;