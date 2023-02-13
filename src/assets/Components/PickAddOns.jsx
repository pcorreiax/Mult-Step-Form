import { useNavigate } from "react-router-dom"

export default function PickAddOns(){

    const navigate = useNavigate();

    function navigateToStepFour(){
        navigate('/step-four')
    }
    return (
        <>
            <h1 className="pageTitle">Pick Add-ons</h1>
            <p className="pageSubtitle">Add-ons help enhance your gaming experiencie.</p>
            
            <div className="addOnsBox">
                <div className="addOnCheck">
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="addOnDescription">
                    <p className="addOntitle">Online service</p>
                    <p className="addOnSub">Access to multiplayer games</p>
                </div>
                <div className="addOnPrice">
                    <p>+$1/mo</p>
                </div>
            </div>
            <div className="addOnsBox">
                <div className="addOnCheck">
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="addOnDescription">
                    <p className="addOntitle">Larger storage</p>
                    <p className="addOnSub">Extra 1TB of cloud save</p>
                </div>
                <div className="addOnPrice">
                    <p>+$2/mo</p>
                </div>
            </div>
            <div className="addOnsBox">
                <div className="addOnCheck">
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="addOnDescription">
                    <p className="addOntitle">Customizable Profile</p>
                    <p className="addOnSub">Custom theme on your profile</p>
                </div>
                <div className="addOnPrice">
                    <p>+$2/mo</p>
                </div>
            </div>

            <div className="button">
                <button className="nextStep" onClick={navigateToStepFour}>Next Step</button>
            </div>
        </>
    )
}