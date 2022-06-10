import React from 'react';
import manufacturing from '../../assets/image/manufacturing.png'
import warehouse from '../../assets/image/warehouse.png'
import photography from '../../assets/image/photography.png'
import Project from './Project';


const Projects = () => {
    const projects = [
        { _id: 1, image: manufacturing, name: 'Electronic Tools Manufacturing' },
        { _id: 2, image: warehouse, name: 'Grocery Warehouse' },
        { _id: 3, image: photography, name: 'Willy Loman Photography Corner' },
    ]
    return (
        <div>
            <h1 className='text-center font-bold text-2xl mt-5 text-blue-500'>My Projects</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    >

                    </Project>)
                }
            </div>
        </div>
    );
};

export default Projects;