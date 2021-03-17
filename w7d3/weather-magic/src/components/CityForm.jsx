import { useState } from 'react'

export default function CityForm(props) {
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")

  const [formData, setFormData] = useState({
    city: "",
    province: ""
  })

  const funkyHandleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })

    // const nameOfKey = "bob"
    // {[nameOfKey]:1}
  }

  const handleChange = event => {
    // if (event.target.value.length < 40) {
    // }
    if (event.target.name === "city") {
      setCity(event.target.value)
    }
    if (event.target.name === "province") {
      setProvince(event.target.value)
    }

  }

  const handleSubmit = event => {
    event.preventDefault()
    props.onSubmit(city)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="city"
        placeholder="Enter the city name"
        value={city}
        onChange={handleChange}
      />
      {/* <input
        name="province"
        placeholder="Enter the province name"
        value={province}
        onChange={handleChange}
      /> */}
      <button>Fetch the weather!</button>
    </form>
  )
}
