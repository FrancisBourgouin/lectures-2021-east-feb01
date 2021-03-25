import { Component } from "react"

class Spy extends Component {
  constructor(props) {
    super(props)
  }

  tauntTheUser = () => console.log('I AM WATCHING YOU MWHAHAHAHA')

  componentDidMount() {
    document.addEventListener('click', this.tauntTheUser)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.tauntTheUser)
  }
  render() {
    return (
      <h1 style={{ fontSize: '5px' }} onClick={this.props.sleepWithTheFishes}>I AM SPY</h1>
    )
  }
}

export default Spy