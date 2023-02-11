import Steps from "../Components/Steps"
import SelectPlan from "../Components/SelectPlan"

export default function StepOne(){
    return(
        <div className="formBox">
            <div className="formBoxSidebar">
                <Steps />
            </div>
            <div className="formMainContent">
                <div className="mainContent">
                    <SelectPlan />
                </div>
            </div>
        </div>
    )
}