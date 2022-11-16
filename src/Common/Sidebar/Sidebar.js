import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default function Sidebar() {
    const toggleSidebar = () => document.body.classList.toggle("open");
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

            <button type="button" class="burger" onclick={toggleSidebar}></button>
            <div class="background"></div>
            <aside class="sidebar">
                <button type="button">
                    <i class="material-symbols-outlined">home</i>
                    <span>Home</span>
                </button>
                <div>
                    <button type="button">
                        <i class="material-symbols-outlined">search</i>
                        <span>Explorer</span>
                    </button>
                    <button type="button">
                        <i class="material-symbols-outlined">settings</i>
                        <span>Settings</span>
                    </button>
                    <button type="button">
                        <i class="material-symbols-outlined">account_circle</i>
                        <span>Account</span>
                    </button>
                </div>
                <button type="button">
                    {/* <li className="nav-item"> */}
                        {/* <Link className="nav-link" to="/">Log Out</Link> */}
                    {/* </li> */}
                    <Link class="material-symbols-outlined text-white" to="/">logout</Link>

                    {/* <i class="material-symbols-outlined">logout</i> */}
                    <span>Logout</span>
                </button>
            </aside>

            {/* <p class="text-info">Change the width of the screen, below 500px, to see how the sidebar is hidden.</p>

            <p class="text-dev">Development of  <a href="https://github.com/frontend-joe/css-sidebars" target="_blank">Frontend Joe</a></p> */}
        </div>
    )
}
