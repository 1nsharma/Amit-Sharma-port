

import React from 'react';
import Section, { SectionTitle } from './Section';
import { Project } from '../types';
import { useTranslation } from '../i18n';
// FIX: Changed react-router-dom import to a wildcard import to address issue where 'Link' was not found as an exported member.
import * as ReactRouterDom from 'react-router-dom';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <ReactRouterDom.Link 
        to={`/projects/${project.id}`}
        className="group bg-black/20 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer hover:shadow-secondary/20"
    >
        <div className="relative h-48 overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white text-5xl">{project.icon}</div>
        </div>
        <div className="p-6">
            <h3 className="font-poppins text-xl font-bold text-secondary mb-2">{project.title}</h3>
            <p className="text-slate-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary/80">{t}</span>
                ))}
            </div>
        </div>
    </ReactRouterDom.Link>
);


const Projects: React.FC = () => {
    const { t } = useTranslation();
    const projectsData = t<Project[]>('projects.items');

    return (
        <Section id="projects">
            <SectionTitle>{t('projects.title')}</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;