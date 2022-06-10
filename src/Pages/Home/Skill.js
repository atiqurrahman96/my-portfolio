import React from 'react';

const Skill = ({ skill }) => {
    const { _id, image, name } = skill;

    return (
        <div>
            <div class="card h-96 w-96 bg-base-100 shadow-xl my-2 hover:drop-shadow-2xl">
                <figure><img className='w-80 h-72 rounded-md' src={image} alt="logo" /></figure>
                <div class="card-body">
                    <h2 class="text-center text-xl font-bold">{name}</h2>


                </div>
            </div>
        </div>
    );
};

export default Skill;