import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { NavigationBar, Homepage, Launches, LaunchDetails, Landpads, News, Payloads, Rockets, Footer } from './components';
import {Container} from 'react-bootstrap';

const App = () => {
    return (
        <div className="bg-light" >
            <div>
                <header>
                    <NavigationBar />
                </header>
            </div>
            <div >
                <main className="border rounded m-2 p-1 px-5 mx-5 " style={{backgroundColor:"var(--bs-gray-200)"}}>
                    <Container fluid >
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/launches" element={<Launches />} />
                            <Route path="/launches/:launchId" element={<LaunchDetails />} />
                            {/* <Route path="/landpads/:landpadId" element={<Landpads />} /> */}
                            <Route path="/news" element={<News />} />
                            {/* <Route path="/payloads/:payloadId" element={<Payloads />} />
                    <Route path="/rockets/:rocketId" element={<Rockets />} /> */}
                        </Routes>
                    </Container>
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
