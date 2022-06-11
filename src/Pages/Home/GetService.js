
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaLinkedin } from "react-icons/fa";

const GetService = () => {


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gwee8nm', 'template_nypsiam', form.current, 'j7ZfcL3ONUmajjWTL')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='bg-black'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 bg-orange-300 mx-10' >
                <div class="card bg-base-300 shadow-xl my-2">

                    <div class=" card-body text-center">
                        <h2 class="text-4xl font-bold">Get in Touch</h2>
                        <div className='flex justify-center'>
                            <a className='mx-2' href="https://www.linkedin.com/in/atiqur-rahman-8aa140231/"><FaLinkedin size='2rem' /></a>

                        </div>
                        <p> For getting me Send me email  </p>
                    </div>
                </div>
                <div className='mx-5'>
                    <div class="card bg-base-300 shadow-xl ">

                        <div class="card-body">
                            <h2 class="card-title">Send Email</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label> <br />
                                <input type="text" name="user_name" class="input input-bordered w-full max-w-xs py-2" placeholder='Enter your name' required /> <br />
                                <label>Email</label><br />
                                <input type="email" name="user_email" placeholder='Place your email' required class="input input-bordered w-full max-w-xs my-2" /> <br />
                                <label>Message</label> <br />
                                <textarea name="message" class="input input-bordered w-full max-w-xs" placeholder='Write what you want' /> <br />
                                <input className='btn btn-success w-80' type="submit" value="Send" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetService;