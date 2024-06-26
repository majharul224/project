import {Link, NavLink } from "react-router-dom";
import user from "../../assets/user.png"

const Navbar = () => {
    const navLinks = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Career</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 gap-x-5">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-5">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-x-5">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user} />
                    </div>
                    <Link className="btn btn-active btn-neutral">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;