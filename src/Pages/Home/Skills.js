import React from 'react';
import Typical from 'react-typical'
import html from '../../assets/image/html1.png'
import css from '../../assets/image/css1.png'
import javascript from '../../assets/image/javascript1.png'
import react from '../../assets/image/react1.png'
import node from '../../assets/image/node1.png'
import mongodb from '../../assets/image/mongodb1.png'
import Skill from './Skill';
const Skills = () => {
    const skills = [
        { _id: 1, image: html, name: 'HTML 5' },
        { _id: 2, image: css, name: 'CSS 3' },
        { _id: 3, image: javascript, name: 'JS' },
        { _id: 4, image: react, name: 'ReactJS' },
        { _id: 5, image: node, name: 'NodeJS' },
        { _id: 6, image: mongodb, name: 'mongoDB' },

    ]
    return (
        <div>
            <h1 className="font-bold text-3xl text-center">
                I have been working on many technologies some of which I have mentioned here:-
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5 px-5 mt-5'>
                {
                    skills.map(skill => <Skill
                        key={skill._id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;