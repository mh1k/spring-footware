import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut();
    }

    const picture = user?.photoURL;
    console.log(user?.photoURL);
    console.log(user);


    return (
        <div className="navbar bg-base-900 px-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                    </ul>
                </div>
                <a className=" text-3xl font-bold text-purple-900">FOOTWARE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg  px-1">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost   btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ? <img alt="user picture" src={picture} /> :
                                    <FaUserCircle className="w-10 h-10"/>
                                }
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>{user?.displayName}</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div> :
                        <div role="button" className="font-semibold text-lg px-3 btn btn-ghost ">
                            <Link to={"/login"}>Login</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;