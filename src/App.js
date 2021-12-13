import React from 'react'
import { Routes ,Route ,Link } from 'react-router-dom';
import './App.css';
import {Navbar ,Homepage,Launches,LaunchDetails,Landpads,News,Payloads,Rockets} from './components';
 
const App = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/launches" element={<Launches />} />
                <Route path="/launches/:launchId" element={<LaunchDetails />} />
                <Route path="/landpads/:landpadId" element={<Landpads />} />
                <Route path="/news" element={<News />} />
                <Route path="/payloads/:payloadId" element={<Payloads />} />
                <Route path="/rockets/:rocketId" element={<Rockets />} />
            </Routes>
            </div>
        </div>
    )
}

export default App;
