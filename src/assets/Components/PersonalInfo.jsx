import React, { useState } from "react"

export default function PersonalInfo(){


    const initialValues = {
        name: '',
        email: '',
        phone: ''
    }

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(input)
    }

    const [input, setInput] = useState(initialValues);

    return (
        <>
            <h1 className="pageTitle">Personal Info</h1>
            <p className="pageSubtitle">Please Provide your name, email address, and phone number.</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <p>Name</p>
                    <input className="inputForm" value={input.name} type="text" name="name" placeholder="e.g. John Doe" id="name" onChange={handleChange}/>
                </div>
                <div>
                    <p>Email Address</p>
                    <input className="inputForm" value={input.email} type="text" name="email" placeholder="e.g john.doe@email.com" id="email" onChange={handleChange}/>
                </div>
                <div>
                    <p>Phone Number</p>
                    <input className="inputForm" value={input.phone} type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" required onChange={handleChange}/>
                </div>
                <div className="button">
                    <button className="nextStep" type="submit">Next Step</button>
                </div>

            </form>
        </>
    )
}