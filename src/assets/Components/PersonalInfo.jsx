import { useState } from "react"

export default function PersonalInfo(){

    const [input, setInput] = useState('')
    return (
        <>
            <h1 className="pageOneTitle">Personal Info</h1>
            <p className="pageOneSubtitle">Please Provide your name, email address, and phone number.</p>

            <form action="">
                <div>
                    <p>Name</p>
                    <input className="inputForm" value={input} type="text" name="name" placeholder="e.g. John Doe" id="name" onChange={e => setInput(e.value)}/>
                </div>
                <div>
                    <p>Email Address</p>
                    <input className="inputForm" type="text" name="email" placeholder="e.g john.doe@email.com" id="email" />
                </div>
                <div>
                    <p>Phone Number</p>
                    <input className="inputForm" type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" required/>
                </div>
                <div className="button">
                    <button className="nextStep" type="submit">Next Step</button>
                </div>

            </form>
        </>
    )
}