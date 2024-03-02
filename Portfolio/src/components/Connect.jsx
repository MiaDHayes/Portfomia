import { useState } from "react"


export default function Connect () {
    const initalState = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        phoneType: '',
        email: '',
        message: '',
    }
    const [formState, setFormState] = useState(initalState)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        setFormState(initalState)
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName"
                    onChange={handleChange} value={formState.firstName}></input>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName"
                    onChange={handleChange} value={formState.lastName}></input>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input type="text" id="phoneNumber"
                    onChange={handleChange} value={formState.phoneNumber}></input>
            <label htmlFor="phoneType">Phone Type</label>
            <select id="phoneType"
                    onChange={handleChange} value={formState.phoneType}>
                <option value="" disabled defaultValue>Select phone type</option>
                <option value="mobile">mobile</option>
                <option value="home">home</option>
                <option value="work">work</option>
                <option value="main">main</option>
            </select>

            <label htmlFor="email">Email: </label>
            <input type="text" id="email"
                    onChange={handleChange} value={formState.email}></input>
            <label htmlFor="message">Message: </label>
            <textarea id="message" cols="30"
                                    rows="10"
                                    onChange={handleChange} value={formState.message}></textarea>
        
            <button type="submit">Talk Soon</button>
        </form>
    )





}