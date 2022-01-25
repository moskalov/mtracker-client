import {Outlet, useNavigate} from "react-router-dom";
import {Menu} from "semantic-ui-react";
import React, {SyntheticEvent, useState} from "react";
import {DEVICES_PAGE, ROADS_PAGE, SETTINGS_PAGE} from "../route/UrlMap";
import {useDispatch} from "react-redux";
import {signOut} from "../redux/action/AuthAction";

const DashboardLayout: React.FC = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const handelSignOut = () => dispatch(signOut());

    const [activeTab, setActiveTab] = useState("home")
    const handleTabChange = (e: SyntheticEvent, d: any) =>
        (path: string) => {
            setActiveTab(d.name);
            navigate(path);
        }

    return (
        <div>
            <Menu fixed={"top"} pointing secondary>
                <Menu.Item
                    name='devices'
                    active={activeTab === 'devices'}
                    onClick={(e, d) => handleTabChange(e, d)(DEVICES_PAGE)}
                />
                <Menu.Item
                    name='roads'
                    active={activeTab === 'roads'}
                    onClick={(e, d) => handleTabChange(e, d)(ROADS_PAGE)}
                />
                <Menu.Item
                    name='settings'
                    active={activeTab === 'settings'}
                    onClick={(e, d) => handleTabChange(e, d)(SETTINGS_PAGE)}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sign out'
                        active={activeTab === 'logout'}
                        onClick={handelSignOut}
                    />
                </Menu.Menu>
            </Menu>
            <Outlet/>
        </div>
    )
}

export default DashboardLayout;