import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import resume from '../../assets/ATIQUR RAHMAN.pdf'
import image from '../../assets/image/person.png'
import Typical from 'react-typical'
const Profile = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-gray-500 px-20">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="avatar" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2000">
                        <div class="rounded-full w-64" >
                            <img src={image} />
                        </div>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500">
                        <h1 class="text-5xl text-white py-2">Hello, This is <span className='font-bold'>Atiqur Rahman</span></h1>
                        <div className='flex'>
                            <a className='mx-2' href="https://www.facebook.com/kaw.shik.925"><FaFacebookSquare size='2rem' /></a>
                            <a className='mx-2' href="https://github.com/atiqurrahman96"><FaGithub size='2rem' /></a>
                            <a className='mx-2' href="https://www.linkedin.com/in/atiqur-rahman-8aa140231/"><FaLinkedin size='2rem' /></a>
                        </div>
                        <h1>
                            <Typical className="font-bold text-3xl"
                                steps={[
                                    "MERN Stack Developer", 1000,
                                    "Enthusiastic", 1000,
                                    "Passionate with coding", 1000,
                                    "React Developer"
                                ]}
                                loop={Infinity}
                            />
                        </h1>
                        <button class="btn btn-primary mx-2">Hire Me</button>
                        <a href={resume} download="resume">
                            <button class="btn btn-accent">Get Resume</button>
                        </a>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;