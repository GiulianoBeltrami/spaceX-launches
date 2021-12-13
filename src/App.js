import React from 'react'
import { Switch ,Route ,Link } from 'react-router-dom';
import './App.css';
import {Navbar ,Homepage,Launches,Landpads,News,Payloads,Rockets} from './components';
 
const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <div className="routes">
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/launches">
                            <Launches />
                        </Route>
                        <Route exact path="/news">
                            <News />
                        </Route>                        
                        <Route exact path="/rockets/:rocketId">
                            <Rockets />
                        </Route>
                        <Route exact path="/payloads/:payloadId">
                            <Payloads />
                        </Route>    
                        <Route exact path="/landpads/:landpadsId">
                            <Landpads />
                        </Route>                                                                                                              
                    </Switch>
                </div>
            
                <div className="footer">
                    <h5 level={5} style={{color:"white", textAlign:"center"}}>
                        SpaceX <br/>
                        All rights reserved.
                    </h5>
                    <br />
                    <Link to="/">Home</Link>
                    <Link to="/launches">Launches</Link>
                    <Link to="/news">News</Link>
                </div>
            </div>
        </div>
    )
}

export default App;