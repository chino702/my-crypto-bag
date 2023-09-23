import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/add-asset">Add Asset</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;