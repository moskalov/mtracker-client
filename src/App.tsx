import React from 'react';
import './App.css';
import SignInPage from "./container/LoginPage/SignInPage";
import {Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux";
import DevicePage from "./container/DevicePage";
import {AuthRoute} from "./route/AuthRoute";
import DashboardLayout from "./layout/DashboardLayout";
import SettingsPage from "./container/SettingsPage";
import MapPage from "./container/MapPage";
import {DEVICES_PAGE, EMAIL_CONFIRMED, ROADS_PAGE, SETTINGS_PAGE, SIGN_IN_PAGE} from "./route/UrlMap";
import {PrivateRoute} from "./route/PrivateRoute";
import EmailConfirmationPage from "./container/EmailConfirmationPage";

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/tracker" element={<DashboardLayout/>}>
                    <Route path={DEVICES_PAGE} element={<PrivateRoute component={DevicePage}/>}/>
                    <Route path={SETTINGS_PAGE} element={<PrivateRoute component={SettingsPage}/>}/>
                    <Route path={ROADS_PAGE} element={<MapPage/>}/>
                </Route>
                <Route path={SIGN_IN_PAGE} element={<AuthRoute component={SignInPage}/>}/>
                <Route path={EMAIL_CONFIRMED} element={<AuthRoute component={EmailConfirmationPage}/>}/>
            </Routes>
        </Provider>
    );
}

export default App;
