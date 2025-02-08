"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "@/store/userAuth";
import useApi from "@/store/ApiAuth";
import "./Navbar.css";
import toast from "react-hot-toast";

const logoImg = "/logo.png";

const Navbar = () => {
    const { isOpen, toggleMenu, closeMenu, toggleLogin } = useAuth();
    const { checkUser, logout } = useApi();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const result = await checkUser();
            if (result?.success) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        };
        checkLoginStatus();
    }, [checkUser]);

    const handleLogout = async () => {
        await logout();  
        setIsLoggedIn(false);
        toast.success("Logout successfully")
    };

    return (
        <div className="main-navbar">
            <div className="nav-title">
                <button className="title-btn btn-1">Admission <p>process for 2025</p></button>
                <p className="nav-quote">जय हिंद, जय भारत</p>

                {isLoggedIn ? (
                    <button className="title-btn btn-2" onClick={handleLogout}>Logout</button>
                ) : (
                    <button className="title-btn btn-2" onClick={toggleLogin}>Staff Login</button>
                )}
            </div>

            <div className="navbar">
                <img src={logoImg} alt="gssslogo" className="navbar-logo" />
                <div className="nav-list">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/academics"}>Academics</Link>
                    <Link href={"/examinationResult"}>Examination Result</Link>
                    <Link href={"/teacher"}>Our Teachers</Link>
                    <Link href={"/"}>Contact Us</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="material-symbols-outlined hamburgerIcon">
                        menu
                    </span>
                </div>
            </div>

            <div className={`hamburger-List ${isOpen ? "open" : ""}`}>
                <Link href={"/"} onClick={closeMenu}>Home</Link>
                <Link href={"/academics"} onClick={closeMenu}>Academics</Link>
                <Link href={"/teacher"} onClick={closeMenu}>Our Teachers</Link>
                <Link href={"/examinationResult"} onClick={closeMenu}>Examination Result</Link>
            </div>
        </div>
    );
};

export default Navbar;
