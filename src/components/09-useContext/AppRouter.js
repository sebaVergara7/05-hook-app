import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    // Switch,
    Route,
    Navigate,
    // Redirect
} from "react-router-dom";

import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className='container'>
                    <Routes>
                    {/* <Switch> */}
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/about" element={<AboutScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path='*' element={<Navigate to='/' />} />
                        {/* <Redirect to='/'/> */}
                    {/* </Switch> */}
                    </Routes>
                </div>

            </div>
        </Router>
    )
}
