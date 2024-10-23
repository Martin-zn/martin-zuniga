function ProjectCard({src, link, name, p}) {
    return (
        <a href={link} target='_blank' style={{ textAlign: 'center', margin: '20px', display: 'block', width: '250px' }}>
            <img 
                src={src} 
                alt={name} 
                style={{
                    width: '100%', 
                    height: '150px', 
                    objectFit: 'cover', 
                    borderRadius: '8px'
                }}
            />
            <h3 style={{ marginTop: '10px', fontSize: '1.2rem' }}>{name}</h3>
            <div>
                <p style={{ fontSize: '1rem' }}>{p}</p>
            </div>
        </a>
    )
}

export default ProjectCard;