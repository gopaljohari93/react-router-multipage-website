import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <h2>Logo</h2>
                </div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/geturl">URLParams</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>



                    {/* <li> */}
                    {/* <a href="/">Home</a> */}
                    {/* <NavLink to="/">Home</NavLink>
                    </li> */}

                    {/* <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return { backgroundColor: isActive ? "green" : "transparent" };
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            style={({ isActive }) => {
                                return { backgroundColor: isActive ? "yellow" : "transparent" };
                            }}
                        >
                           About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/service"
                            style={({ isActive }) => {
                                return { backgroundColor: isActive ? "blue" : "transparent", color: "pink"};
                            }}
                        >
                          Service
                        </NavLink>
                    </li> */}
                   
                   
                    {/* <li>
                        <NavLink to="/user">UserList</NavLink>
                    </li> */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar