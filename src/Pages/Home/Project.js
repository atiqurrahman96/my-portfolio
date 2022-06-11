import React from 'react';
import { Link } from 'react-router-dom';


const Project = ({ project }) => {
    const { _id, image, name, technologies, clientSide, liveSide, serverSide } = project;

    return (
        <div>
            <div class="card w-96 h-98 bg-base-100 shadow-xl hover:drop-shadow-2xl my-2" data-aos="zoom-in-up" data-aos-duration="1500">
                <figure><img className='w-28 hue-rotate-30 rotate-45 rounded-md hover:drop-shadow-lg' src={image} alt="Project Image" /></figure>
                <div class="card-body">
                    <h2 class="text-center font-bold text-xl">Name:{name}</h2>
                    <h3><strong>{technologies}</strong></h3>
                    <div>
                        <a className='btn bg-gradient-to-r from-green-400 to-yellow-500 hover:from-pink-500 hover:to-blue-500  mx-1 text-black font-bold' href={clientSide}>clientSide</a>
                        <a className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  mx-1 text-black font-bold' href={liveSide}>LiveSide</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;