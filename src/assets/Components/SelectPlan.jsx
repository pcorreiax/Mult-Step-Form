import React from "react"
import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function SelectPlan(){

    const [isToggled, toggle] = useState(false)

    const changeOption = () => {
        toggle(!isToggled)
    }

    const navigate = useNavigate();

    function navigateToStepThree(){
        navigate('/step-three')
    }

    function selectPlan(e) {
        e.target.classList.add("planActive")
    }

    return(
        <> 
            <h1 className="pageTitle">Select your plan</h1>
            <p className="pageSubtitle">You have the option of monthly or yearly billing.</p>

            <div className="plans" onClick={e => selectPlan(e)}>
                <div className="planItem" >
                    <img src={arcade} alt="arcade icon" onClick={e => selectPlan(e)} />
                    <p className="planTitle">Arcade</p>
                    <p className="planPrice">$9/mo</p>
                </div>
                <div className="planItem" >
                    <img src={advanced} alt="arcade icon" />
                    <p className="planTitle">Advanced</p>
                    <p className="planPrice">$12/mo</p>
                </div>
                <div className="planItem" >
                    <img src={pro} alt="arcade icon" />
                    <p className="planTitle">Pro</p>
                    <p className="planPrice">$15/mo</p>
                </div>
            </div>


            
            { //Update futuro
            
            /* <div className="billing">
                <p className="billingOptions">Monthly</p>
                <label className='billingLabel'>
                    <input className="billingInput" type="checkbox" defaultChecked={isToggled} onClick={changeOption}/>
                    <span className="billingSpan" />
                </label>
                <p className="billingOptions">Yearly</p>
            </div> */}

            <div className="button">
                    <button className="nextStep" onClick={navigateToStepThree}>Next Step</button>
            </div>
        </>
    )
}