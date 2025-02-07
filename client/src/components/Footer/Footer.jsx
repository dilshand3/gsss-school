import React from 'react';
import Link from 'next/link';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <section className='main-footer'>
                <section className='footer' id='footer'>
                    <div className="footer-box footer-one">
                        <h4>GET IN TOUCH</h4>
                        <p>Address: Chak 7STG, Khushal Nagar, Suratgarh - Hanumangarh Rd, Near Toll Plaza, Rajasthan 335801</p>
                        <p>Corporate Office: Office No. 1521, 15th floor, Galaxy Diamond Plaza, Sector 4 Greater Noida (West), U.P</p>
                        <p>Phone: (+91) 7240453567  /  (+91) 999 134 11</p>
                        <p>Email: help@davschool.com</p>
                    </div>
                    <div className="footer-box two">
                        <h4>HELP & SUPPORT</h4>
                        <div className="footer-two">
                            <ul>
                                <li>24x7 Live Help</li>
                                <li>About Us</li>
                                <li>Programs</li>
                                <li>Events</li>
                            </ul>
                            <ul>
                                <li>Contact Us</li>
                                <li>FAQs</li>
                            </ul>
                        </div>

                    </div>
                </section>
                <p id='footer-right'>	&#169; All right reserved to GSSS RAWATSAR 2025 Ltd. || developed & managed by <Link className="footer-portfolio-url" href="https://dilshan-woad.vercel.app/">dilshan</Link></p>
            </section>
        </>
    )
}

export default Footer