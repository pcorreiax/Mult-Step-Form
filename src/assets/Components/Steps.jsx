import React from "react"

export default function Steps(){

    return (
        <>
            <ul className="stepBox">
                <li className="stepList"> 
                    <div >
                    <div className="stepNumber">
                        1
                    </div>
                    </div>
                    <div className="stepDescription">
                        <p className="stepTitle">STEP 1</p>
                        <p className="stepSubtitle">YOUR INFO</p>
                    </div>
                </li>
                <li className="stepList"> 
                    <div className="stepNumber">
                        2
                    </div>
                    <div className="stepDescription">
                        <p className="stepTitle">STEP 2</p>
                        <p className="stepSubtitle">SELECT PLAN</p>
                    </div>
                </li>
                <li className="stepList"> 
                    <div className="stepNumber">
                       3
                    </div>
                    <div className="stepDescription">
                        <p className="stepTitle">STEP 3</p>
                        <p className="stepSubtitle">ADD-ONS</p>
                    </div>
                </li>
                <li className="stepList"> 
                    <div className="stepNumber">
                        4
                    </div>
                    <div className="stepDescription">
                        <p className="stepTitle">STEP 4</p>
                        <p className="stepSubtitle">SUMMARY</p>
                    </div>
                </li>
            </ul>
        </>
    )
}