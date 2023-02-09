import './App.css'
import PersonalInfo from './assets/Components/PersonalInfo'
import Steps from './assets/Components/Steps'

function App() {

    return (
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

export default App
