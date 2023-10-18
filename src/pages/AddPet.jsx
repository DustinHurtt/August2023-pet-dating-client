import { useState } from "react"

import { post } from "../services/authService"


const AddPet = () => {

    const [ newPet, setNewPet ] = useState({
        animalType: '',
        name: '',
        energyLevel: 1,
        size: '',
        location: '',
        gender: '',
        image: '',
        tagline: ''
    })

    const handleTextChange = (e) => {
        console.log("text change", newPet)
        setNewPet((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleNumberChange = (e) => {
        setNewPet((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        post('/pets/create', newPet)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

  return (
    <div>
        <h1>Add Your Pet</h1>

        <form onSubmit={handleSubmit}>

            <label>Animal Type
                <input name="animalType" type="text" value={newPet.animalType} onChange={handleTextChange} />
            </label>
            <label>Name
                <input name="name" type="text" value={newPet.name} onChange={handleTextChange}/>
            </label>
            <label>Energy Level
                <input name="energyLevel" type="number" min={1} max={10} value={newPet.energyLevel} onChange={handleNumberChange}/>
            </label>
            <label>Size
                <select name="size" value={newPet.size} onChange={handleTextChange}>
                    <option value={"extra-small"}>Extra Small</option>
                    <option value={"small"}>Small</option>
                    <option value={"medium"}>Medium</option>
                    <option value={"large"}>Large</option>
                    <option value={"extra-large"}>Extra Large</option>
                </select>

            </label>
            <label>Location
                <input name="location" type="text" value={newPet.location} onChange={handleTextChange}/>
            </label>
            <label>Gender
                <input name="gender" type="text" value={newPet.gender} onChange={handleTextChange}/>
            </label>
            <label>Image
                <input name="image" type="text" value={newPet.image} onChange={handleTextChange}/>
            </label>
            <label>Tagline
                <input name="tagline" type="text" value={newPet.tagline} onChange={handleTextChange}/>
            </label>

            <button type="submit">Add Pet</button>

        </form>
    </div>
  )
}

export default AddPet


// animalType: String,
// name: String,
// energyLevel: {
//   type: Number,
//   min: 1,
//   max: 10,
//   default: 1,
// },
// size: {
//   type: String,
//   enum: ["extra-small", "small", "medium", "large", "extra-large"],
// },
// location: String,
// gender: String,
// image: {
//     type: String,
//     default: 'https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'
// },
// owner: { type: Schema.Types.ObjectId, ref: "User" },
// tagline: String,