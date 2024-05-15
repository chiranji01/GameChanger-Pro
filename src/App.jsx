import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './auth/AuthContext.jsx';
import Home from './layouts/Home.jsx';
import { PlayerDashboard } from "./layouts/PlayerDashboard.jsx";
import { CoachDashboard } from "./layouts/CoachDashboard.jsx";
import Welcome from "./layouts/Welcome.jsx";
import Register from "./layouts/Register.jsx";
import Login from "./layouts/Login.jsx";
import UserRole from "./layouts/UserRole.jsx";
import Calendar from "./layouts/Calendar.jsx"; 
import Performance from "./layouts/Performance.jsx"; 
import {PlayerComparison} from "./layouts/PlayerComparison.jsx";
import {PlayerForm} from "./layouts/PlayerForm.jsx";
import {PlayerProfile} from "./layouts/PlayerProfile.jsx";

function App() {
    return (
        <div className="app">
            <AuthContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/UserRole/" element={<UserRole/>} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/Welcome" element={<Welcome />} />
                        <Route path="/calendar" element={<Calendar />} /> 
                        <Route path="/Performance" element={<Performance />} /> 
                        <Route path="/PlayerDashboard/" element={<PlayerDashboard />} />
                        <Route path="/PlayerComparison/" element={<PlayerComparison />} />
                        <Route path="/CoachDashboard/" element={<CoachDashboard />} />
                        <Route path="/PlayerForm/" element={<PlayerForm/>} />
                        <Route path="/PlayerProfile" element={<PlayerProfile/>} />
                    </Routes>
                </Router>
            </AuthContextProvider>
        </div>
    );
}

export default App;
