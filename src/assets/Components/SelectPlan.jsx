import React from "react"
import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'
import { useState } from "react"


export default function SelectPlan(){

    const [isToggled, toggle] = useState(false)

    const changeOption = () => {
        toggle(!isToggled)
    }

    return(
        <> 
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div className="plans">
                <div className="planItem">
                    <img src={arcade} alt="arcade icon" />
                    <p className="planTitle">Arcade</p>
                    <p className="planPrice">$9/mo</p>
                </div>
                <div className="planItem">
                    <img src={advanced} alt="arcade icon" />
                    <p className="planTitle">Advanced</p>
                    <p className="planPrice">$12/mo</p>
                </div>
                <div className="planItem">
                    <img src={pro} alt="arcade icon" />
                    <p className="planTitle">Pro</p>
                    <p className="planPrice">$15/mo</p>
                </div>
            </div>

            <div className="billing">
                <p className="billingOptions">Monthly</p>
                <label className='billingLabel'>
                    <input className="billingInput" type="checkbox" defaultChecked={isToggled} onClick={changeOption}/>
                    <span className="billingSpan" />
                </label>
                <p className="billingOptions">Yearly</p>
            </div>

            <div className="button">
                    <button className="nextStep" type="submit">Next Step</button>
            </div>
        </>
    )
}