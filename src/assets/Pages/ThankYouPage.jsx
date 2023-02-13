import Steps from "../Components/Steps"
import ThankYou from "../Components/ThankYou"

export default function ThankYouPage(){
    return(
        <div className="formBox">
            <div className="formBoxSidebar">
                <Steps />
            </div>
            <div className="formMainContent">
                <div className="mainContent">
                    <ThankYou />
                </div>
            </div>
        </div>
    )
}