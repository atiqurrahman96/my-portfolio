import React from 'react';
import { AiFillCopyrightCircle } from "react-icons/ai";
const Footer = () => {

    return (
        <div>
            <footer class="footer p-10 bg-gray-900 text-neutral-content">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="#">Branding</a>
                    <a class="#">Design</a>
                    <a class="#">Marketing</a>
                    <a class="#">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="#">About us</a>
                    <a class="#">Contact</a>
                    <a class="#">Jobs</a>
                    <a class="#">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="#">Terms of use</a>
                    <a class="#">Privacy policy</a>
                    <a class="#">Cookie policy</a>

                </div>




            </footer>

        </div>
    );
};

export default Footer;