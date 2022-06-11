import React from 'react';
import { Link } from 'react-router-dom';


const Project = ({ project }) => {
    const { _id, image, name } = project;

    return (
        <div>
            <div class="card w-96 h-64 bg-base-100 shadow-xl my-2 hover:drop-shadow-2xl" data-aos="zoom-in-up" data-aos-duration="1500">
                <figure><img className='w-28 hue-rotate-30 rotate-45 rounded-md hover:drop-shadow-lg' src={image} alt="Project Image" /></figure>
                <div class="card-body">
                    <h2 class="text-center font-bold text-xl">{name}</h2>

                    <div class="card-actions justify-center">
                        <Link to={`/project/${_id}`}> <button class="btn btn-sm btn-accent">See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;