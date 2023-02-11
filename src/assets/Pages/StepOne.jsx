import Steps from "../Components/Steps"
import PersonalInfo from "../Components/PersonalInfo"

export default function StepOne(){
    return(
        <div className="formBox">
            <div className="formBoxSidebar">
                <Steps />
            </div>
            <div className="formMainContent">
                <div className="mainContent">
                    <PersonalInfo />
                </div>
            </div>
        </div>
    )
}