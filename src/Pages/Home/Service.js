import React from 'react';

const Service = ({ service }) => {
    const { name, picture, about } = service;
    return (
        <div>
            <div class="card h-96 w-96  bg-base-100 shadow-xl my-2  hover:drop-shadow-2xl" data-aos="fade-up-right" data-aos-duration="2000">
                <figure><img className='w-40 h-44 rounded-md' src={picture} alt="image can not found" /></figure>
                <div class="card-body">
                    <h2 class="text-xl font-bold">{name}</h2>
                    <p>{about}</p>

                </div>
            </div>
        </div>
    );
};

export default Service;