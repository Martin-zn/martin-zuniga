import React from 'react'


function ProjectCard({src, link, name, p}) {
    return (
        <a href={link} target='_blank'>
            <img className='hover' src={src} alt={name} />
            <h3>{name}</h3>
            <p>{p}</p>
        </a>
    )
}

export default ProjectCard
