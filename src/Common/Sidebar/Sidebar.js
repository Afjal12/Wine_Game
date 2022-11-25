import React from 'react'
import { Link } from 'react-router-dom';
import UserDetail from '../../Components/Dashboard/UserDetail';
import './Sidebar.css'

export default function Sidebar() {
    const toggleSidebar = () => document.body.classList.toggle("open");
    return (
        <div >
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

            <button type="button" className="burger" onClick={toggleSidebar}></button>
            <div className="background"></div>
            <aside className="sidebar">
                <button type="button">
                    {/* <i className="material-symbols-outlined">home</i> */}
                    <Link  className="material-symbols-outlined text-white" to="/">home</Link>
                    <span>Home</span>
                </button>
                <div>
                    <button type="button">
                        <i className="material-symbols-outlined">search</i>
                        <span>Explorer</span>
                    </button>
                    <button type="button">
                        <i className="material-symbols-outlined">settings</i>
                        <span>Settings</span>
                    </button>
                    <button type="button">
                        <i className="material-symbols-outlined">account_circle</i>
                        {/* <span>Account</span> */}
                        <span className='bg-dark ' style={{minWidth: '25vw'}}><UserDetail /></span>
                    </button>
                </div>
                <button type="button">
                    {/* <li className="nav-item"> */}
                        {/* <Link className="nav-link" to="/">Log Out</Link> */}
                    {/* </li> */}
                    <Link className="material-symbols-outlined text-white" to="/">logout</Link>

                    {/* <i className="material-symbols-outlined">logout</i> */}
                    <span>Logout</span>
                </button>
            </aside>

            {/* <p className="text-info">Change the width of the screen, below 500px, to see how the sidebar is hidden.</p>

            <p className="text-dev">Development of  <a href="https://github.com/frontend-joe/css-sidebars" target="_blank">Frontend Joe</a></p> */}
        </div>
    )
}
