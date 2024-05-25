// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './components/Events/Events';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import BenefitsMain from "./components/Benefits/BenefitsMain.jsx";
import StartPage from "./components/MainPage/StartPage.jsx";
import SignUp from "./components/Account/SignUp/SignUp.jsx";
import SignIn from "./components/Account/LogIn/SignIn.jsx";
import { AuthProvider } from "./contexts/AuthContexts.jsx";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/benefits" element={<BenefitsMain />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
