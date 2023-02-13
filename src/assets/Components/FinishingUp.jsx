import { useNavigate } from "react-router-dom";

export default function FinishingUp(){

    const navigate = useNavigate();

    function navigateToThankYou(){
        navigate('/thank-you')
    }
    return (
        <>
            <h1 className="pageTitle">Finishing Up</h1>
            <p className="pageSubtitle">Double-check everything looks OK before confirming.</p>

            <div className="checkOutBox">
                <div className="planSelected">
                    <div className="planSelectedTile">
                        <p>Arcade (Monthly)</p>
                    </div>
                    <div className="planSelectedPrice">$9/mo</div>
                </div>

                <hr />

                <div className="addOnSelected">
                    <p className="addOnSelectedTitle">Online service</p>
                    <p className="addOnSelectedPrice">$1/mo</p>
                </div>
                <div className="addOnSelected">
                    <p className="addOnSelectedTitle">Online service</p>
                    <p className="addOnSelectedPrice">$1/mo</p>
                </div>
            </div>

            <div className="total">
                <p>Total</p>
                <p>+$12/mo</p>
            </div>

            <div className="button">
                    <button className="nextStep" onClick={navigateToThankYou}>Confirm</button>
            </div>
        </>
    )
}