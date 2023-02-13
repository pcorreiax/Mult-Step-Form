import Steps from "../Components/Steps"
import FinishingUp from "../Components/FinishingUp"

export default function StepFour(){
    return(
        <div className="formBox">
            <div className="formBoxSidebar">
                <Steps />
            </div>
            <div className="formMainContent">
                <div className="mainContent">
                    <FinishingUp />
                </div>
            </div>
        </div>
    )
}