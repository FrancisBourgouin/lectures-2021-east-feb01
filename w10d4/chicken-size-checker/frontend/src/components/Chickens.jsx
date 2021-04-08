import { useEffect, useState } from "react"
import axios from 'axios'
export default function Chickens(props) {
  const [listOfChickens, setListOfChickens] = useState(null)

  useEffect(() => {
    axios
      .get("/api/chickens")
      .then(res => setListOfChickens(res.data))
  }, [])

  return (
    <section>
      <h1>I am Chickens</h1>
      {listOfChickens && listOfChickens.map(name => <li key={name}>{name}</li>)}
    </section>)
}