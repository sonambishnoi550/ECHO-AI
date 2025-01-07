import React from 'react';
import { FOOTER_DATA } from '../utils/helper';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-dark-black pt-[178px] max-xl:pt-[60px] max-sm:pt-5 -mt-1">
            <div className="max-w-[1172px] px-4 mx-auto">
                <div className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-10">
                    <a href="#">
                        <img src="./assets/images/webp/footer-logo.webp" alt="footer-logo"
                            className="max-w-[150px] max-sm:max-w-[100px] pointer-events-none"/>
                    </a>
                    <div className="flex flex-col gap-2">
                        <p className="leading-5 max-sm:leading-4 text-white">Quick Links</p>
                        {FOOTER_DATA.map((obj, i) => (
                            <a key={i}
                                className=" text-lightgray hover:text-white hover:opacity-100 transition-all duration-300 cursor-pointer max-sm:text-center"
                                href={obj.link}> {obj.title}
                            </a> ))}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white leading-5 max-sm:leading-4 pb-3 max-sm:text-sm max-sm:text-center"> Send Us An E-mail</p>
                        <a className="text-white leading-6 max-sm:leading-4 opacity-70 cursor-pointer hover:text-dark-blue transition-all duration-300 max-sm:text-center"
                            href="mailto:info@echoai.ai">info@echoai.ai</a>
                        <p className="text-white leading-5 max-sm:leading-4 max-sm:text-sm pt-8 max-sm:text-center">
                            Follow Us On</p>
                        <div className="flex items-center gap-3 pt-[18px]">
                            <a href="https://www.linkedin.com/feed/" target="_blank"
                                className="hover:scale-110 transition-all duration-500" rel="noreferrer">
                                <img src="./assets/images/svg/linkedin.svg" alt="linkedin"/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank"
                                className="hover:scale-110 transition-all duration-500" rel="noreferrer">
                                <img src="./assets/images/svg/instagram.svg" alt="instagram"/>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank"
                                className="hover:scale-110 transition-all duration-500" rel="noreferrer">
                                <img src="./assets/images/svg/facebook.svg" alt="facebook"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pb-[30px] pt-[60px] max-sm:pt-10">
                    <div className="h-0.5 footer-gradient-line w-full"></div>
                    <p className="text-white opacity-80 text-center max-sm:text-sm pt-5">
                        Copyright ECHO AI © {currentYear} | All Rights Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;