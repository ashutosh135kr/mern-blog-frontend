import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { BACKEND_SERVER_URL } from "./Helper";

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch(`${BACKEND_SERVER_URL}/profile`, {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch(`${BACKEND_SERVER_URL}/logout`, {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header className="header-sec">
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {username && (
                    <>

                        <Link to={'/create'}> Create new post </Link>
                        <a href="/" onClick={logout}>Logout</a>
                        <span className="user-area">
                            <span className="user-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                            </svg>

                            </span>
                            <span>{username}</span>
                        </span>
                    </>
                )}
                {!username && (
                    <>

                        <Link to="/login" >Login</Link>
                        <Link to="/register" >Register</Link>
                    </>
                )}

            </nav>
        </header>
    );
}