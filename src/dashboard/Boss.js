import React, { useEffect, useState } from 'react'

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import Devices from './DashboardUI/Devices';
import BranchUI from './DashboardUI/BranchUI';
import Employee from './DashboardUI/Employee';
import Dashboard from './DashboardUI/Dashboard';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Boss() {

    console.log(sessionStorage.getItem("x-access-token") + " tfdfgefdn")
    const location = useLocation();
    const navigate = useNavigate();
    const [urlcheck, seturlCheck] = useState("DashboardUI");

    return (
        <div style={{ display: "flex" }}>

            <div >

                <div style={{ display: "flex", height: "100vh", }}>

                    <CDBSidebar textColor="#fff" backgroundColor="#333">
                        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>

                            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                                {location.state.name}
                            </a>
                        </CDBSidebarHeader>


                        <CDBSidebarContent className="sidebar-content">
                            <CDBSidebarMenu>
                                {/* <NavLink exact to="/" activeClassName = "activeClicked"> */}
                                <button style={{ background: "none", border: "none", color: "#FFFF99" }} onClick={() => seturlCheck("DashboardUI")}>  <CDBSidebarMenuItem icon="columns">
                                    dashboard

                                </CDBSidebarMenuItem></button>
                                {/* </NavLink> */}

                                {/* <NavLink exact to="/BranchUI" activeClassName = "activeClicked"> */}
                                <button style={{ background: "none", border: "none", color: "#FFFF99" }} onClick={() => seturlCheck("BranchUI")}>
                                    <CDBSidebarMenuItem icon="table">
                                        Branch

                                    </CDBSidebarMenuItem></button>
                                {/* </NavLink> */}
                                {/* <NavLink exact to="/BranchUI" activeClassName = "activeClicked"> */}
                                <button style={{ background: "none", border: "none", color: "#FFFF99" }} onClick={() => seturlCheck("DevicesUI")}>
                                    <CDBSidebarMenuItem icon="table">
                                        Devices

                                    </CDBSidebarMenuItem></button>
                                {/* </NavLink> */}
                                {/* <NavLink exact to="/DashboardUI" activeClassName = "activeClicked" style={{backgroundColor: "blue"}}> */}
                                <button style={{ background: "none", border: "none", color: "#FFFF99" }} onClick={() => seturlCheck("EmpUI")}>    <CDBSidebarMenuItem icon="user">
                                    Admin Details

                                </CDBSidebarMenuItem></button>
                                {/* </NavLink> */}
                                {/* <NavLink exact to="/DashboardUI" activeClassName = "activeClicked" style={{backgroundColor: "blue"}}> */}
                                <button style={{ background: "none", border: "none", color: "#FFFF99" }} onClick={() => seturlCheck("EmpUI")}>    <CDBSidebarMenuItem icon="user">
                                    Employee Details

                                </CDBSidebarMenuItem></button>
                                {/* </NavLink> */}
                            </CDBSidebarMenu>
                        </CDBSidebarContent>
                        <CDBSidebarFooter style={{ textalign: 'center' }}>
                            <div className='sidebar-btn-wrapper' style={{ padding: '20px 5px' }}> <button onClick={() => LogOut()}>Log Out</button></div>
                        </CDBSidebarFooter>
                    </CDBSidebar>
                </div>
            </div>
            <div style={{ height: "100vh", width: "100vw" }}>
                {urlcheck === "BranchUI" ? <BranchUI></BranchUI> : urlcheck === "EmpUI" ? <Employee></Employee> : urlcheck === "DevicesUI" ? <Devices></Devices> :
                    <Dashboard></Dashboard>}

            </div>
        </div>


    )
    function LogOut() {
        sessionStorage.removeItem("x-access-token")

        navigate("/")
    }
}













