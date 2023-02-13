import './App.css'
import "./assets/Fonts/Ubuntu-Regular.ttf"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import StepOne from './assets/Pages/StepOne'
import StepTwo from './assets/Pages/StepTwo'
import StepThree from './assets/Pages/StepThree'
import StepFour from './assets/Pages/StepFour'
import ThankYouPage from './assets/Pages/ThankYouPage'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<StepOne />}/>
                    <Route path="/step-two" element={<StepTwo />}/>
                    <Route path="/step-three" element={<StepThree />}/>
                    <Route path="/step-four" element={<StepFour />}/>
                    <Route path="/thank-you" element={<ThankYouPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
