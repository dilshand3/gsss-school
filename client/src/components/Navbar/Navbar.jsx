"use client";
import Link from "next/link";
import useAuth from "@/store/userAuth";
import "./Navbar.css";
const logoImg = "/logo.png";

const Navbar = () => {
    const { isOpen, toggleMenu, closeMenu } = useAuth();

    return (
        <div className="main-navbar">
            <div className="nav-title">
                <button className="title-btn btn-1">Addmission <p>process for 2025</p></button>
                <p className="nav-quote">जय हिंद, जय भारत</p>
                <button className="title-btn btn-2">Staff Login</button>
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
                <Link href={"/"} onClick={closeMenu}>Academics</Link>
                <Link href={"/"} onClick={closeMenu}>Our Teachers</Link>
                <Link href={"/"} onClick={closeMenu}>Examination Result</Link>
            </div>
        </div>
    );
};

export default Navbar;
