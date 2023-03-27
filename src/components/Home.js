import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const isLoggedIn = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username === 'abc' && password === '123')
        return true
    return false;

};

function Home() {
    const [link, stLink] = useState('/login')
    useEffect(() => {
        if (isLoggedIn()) {
            stLink('/profile')
        }
    })
    return (
        <div>
            <ul>
                <li>
                    <Link id="login" to="/login">
                        LogIn
                    </Link>
                </li>
                <li>
                    <Link id="profile" to={link}>
                        Profile
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
