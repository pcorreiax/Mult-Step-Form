import PickAddOns from "../Components/PickAddOns"
import Steps from "../Components/Steps"

export default function StepThree(){
    return(
        <div className="formBox">
            <div className="formBoxSidebar">
                <Steps />
            </div>
            <div className="formMainContent">
                <div className="mainContent">
                    <PickAddOns />
                </div>
            </div>
        </div>
    )
}