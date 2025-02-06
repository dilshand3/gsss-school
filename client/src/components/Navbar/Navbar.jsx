import Link from "next/link";
import "./Navbar.css";
const logoImg = "/logo.png"

const Navbar = () => {
    return (
        <div className="main-navbar">
            <div className="nav-title">
                <button className="title-btn btn-1">Addmission <p>process for 2025</p></button>
                <p className="nav-quote">जय हिंद, जय भारत</p>
                <button className="title-btn btn-2">Staff Login</button>
            </div>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logoImg} alt="" />
                    <span>
                        <p>GOVT SEN SCHOOL</p>
                        <hr />
                        <p>RAWATSAR,Hanumangrh</p>
                    </span>
                </div>
                <div className="nav-list">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Academics</Link>
                    <Link href={"/"}>Our Teachers</Link>
                    <Link href={"/"}>Examination Result</Link>
                    <Link href={"/"}></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;