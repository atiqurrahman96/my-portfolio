import React from 'react';

const Skill = ({ skill }) => {
    const { _id, image, name } = skill;

    return (
        <div>
            <div class="card h-80 w-80 bg-base-100 shadow-xl my-2 hover:drop-shadow-2xl " data-aos="flip-right" data-aos-duration="2000">
                <figure><img className='w-72 h-60 rounded-2xl hover:drop-shadow-2xl hover:border-8 duration-1000' src={image} alt="logo" /></figure>
                <div class="card-body">
                    <h2 class="text-center text-xl font-bold">{name}</h2>


                </div>
            </div>
        </div>
    );
};

export default Skill;