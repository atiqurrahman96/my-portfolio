import React from 'react';
import manufacturing from '../../assets/image/manufacturing.png'
import warehouse from '../../assets/image/warehouse.png'
import photography from '../../assets/image/photography.png'
import Project from './Project';


const Projects = () => {
    const projects = [
        { _id: 1, image: manufacturing, name: 'Electronic Tools Manufacturing', technologies: 'In this project , I have used ReactJs, React Query, NodeJS, MongoDB, ExpressJS, React Router, React Hooks Form, login and sing Up page, Dashboard', clientSide: 'https://github.com/atiqurrahman96/manufacturer-client-side-assignment', liveSide: 'https://electronic-tools-manufacturing.firebaseapp.com/', serverSide: 'https://github.com/atiqurrahman96/manufacturer-client-side-assignment' },
        { _id: 2, image: warehouse, name: 'Grocery Warehouse', technologies: 'In this project, I have worked with ReactJS, Email and Password authentication, social log in, Deployed heroku and firebase , As database used mongoDb ', clientSide: 'https://github.com/atiqurrahman96/warehouse-management-client-side-assignment', liveSide: 'https://my-grocery-warehouse-services.web.app/', serverSide: 'https://github.com/atiqurrahman96/warehouse-management-server-side-assignment' },
        { _id: 3, image: photography, name: 'Willy Loman Photography Corner', technologies: 'In this project, I have used React router, Active Link, React bootstrap, React firebase hooks', clientSide: 'https://github.com/atiqurrahman96/independent-service-provider-assignment', serverSide: 'https://willy-loman-photography-corner.web.app/' },
    ]
    return (
        <div className='bg-gray-700'>
            <h1 className='text-center font-bold text-2xl  text-orange-400'>My Projects</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-5'>
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