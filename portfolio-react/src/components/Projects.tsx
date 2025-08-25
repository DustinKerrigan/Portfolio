import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectList.map((project, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2">{project.description}</p>
                        <a href={project.link} className="text-blue-500 hover:underline mt-2 block">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;