import React from 'react'
import { Routes ,Route ,Link } from 'react-router-dom';
import './App.css';
import {NavigationBar ,Homepage,Launches,LaunchDetails,Landpads,News,Payloads,Rockets, Footer} from './components';
 
const App = () => {
    return (
        <div>
            <div>
                <header>
                    <NavigationBar />
                </header>
            </div>
            <div>
                <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/launches" element={<Launches />} />
                    <Route path="/launches/:launchId" element={<LaunchDetails />} />
                    {/* <Route path="/landpads/:landpadId" element={<Landpads />} /> */}
                    <Route path="/news" element={<News />} />
                    {/* <Route path="/payloads/:payloadId" element={<Payloads />} />
                    <Route path="/rockets/:rocketId" element={<Rockets />} /> */}
                </Routes>
                </main>
            </div>
            <div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default App;
