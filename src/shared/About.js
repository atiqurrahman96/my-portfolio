import React from 'react';
import image from '../assets/image/person.png'
const About = () => {
    return (
        <div>
            <div class="card card-compact mx-auto w-96 bg-base-100 shadow-2xl mt-5 bg-gray-900">
                <figure><img src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-center text-xl
                    font-bold text-white">This is Atiqur Rahman</h2>
                    <p className='text-white'>I am from Kishorejong, Dhaka. I have completed my graduation from <strong>Islamic University, Kustia, Bangladesh</strong> under the department of <strong>English</strong>. I am a Jr Web Developer. As a developer, I would love to code. I always try to discover something new and also try to gather new knowledge about web development. I am always trying my best to improve my skills day by day.</p>
                    <h3 className='text-xl text-white'>Phone:(+880) 1632741385</h3>
                    <h4 className='text-xl text-white'>Email: atiqurrahmanbd302@gmail.com</h4>
                </div>
            </div>
        </div>
    );
};

export default About;