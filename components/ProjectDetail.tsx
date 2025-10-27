

import React from 'react';
// FIX: Changed react-router-dom import to a wildcard import to address issues where its members were not found as exports.
import * as ReactRouterDom from 'react-router-dom';
import { useTranslation } from '../i18n';
import { Project } from '../types';
import Section from './Section';
import { ArrowLeftIcon } from './Icons';
import Loader from './Loader';

const ProjectDetail: React.FC = () => {
    const { projectId } = ReactRouterDom.useParams<{ projectId: string }>();
    const { t } = useTranslation();
    const projectsData = t<Project[]>('projects.items');
    const project = projectsData.find(p => p.id === projectId);

    const projectContent = () => {
        if (!project) {
            return (
                <Section id="project-not-found">
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                        <ReactRouterDom.Link to="/" className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline">
                            <ArrowLeftIcon />
                            Go back to homepage
                        </ReactRouterDom.Link>
                    </div>
                </Section>
            );
        }

        const codeSnippet = `
import React from 'react';

const ${project.title.replace(/[\s-]/g, '')}Component = () => {
  return (
    <div className="project-container">
      <h1>${project.title}</h1>
      <p>${project.description}</p>
      {/* ... more component logic ... */}
    </div>
  );
};

export default ${project.title.replace(/[\s-]/g, '')}Component;
        `;

        return (
            <Section id="project-detail">
                <div className="max-w-4xl mx-auto">
                    <ReactRouterDom.Link to="/#projects" className="inline-flex items-center gap-2 text-secondary mb-8 font-semibold hover:underline">
                        <ArrowLeftIcon />
                        Back to All Projects
                    </ReactRouterDom.Link>
                    
                    <img src={project.imageUrl} alt={project.title} className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"/>

                    <h1 className="font-poppins text-4xl md:text-5xl font-bold text-secondary mb-4">{project.title}</h1>
                    <p className="text-lg text-slate-300 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary/80">{t}</span>
                        ))}
                    </div>

                    <div className="mb-8">
                        <h3 className="font-poppins text-2xl font-bold mb-4">{t('projects.demo.title')}</h3>
                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-md">
                            <div className="p-2.5 bg-slate-800 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="p-4 text-sm font-mono text-slate-200 overflow-x-auto bg-slate-900/50">
                                <pre><code>{codeSnippet.trim()}</code></pre>
                            </div>
                        </div>
                    </div>

                    <a 
                        href={project.link}
                        target={project.link.startsWith('#') ? '_self' : '_blank'}
                        rel="noopener noreferrer" 
                        className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-secondary text-white shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95"
                    >
                        {project.link.startsWith('#') ? t('projects.cta.contact') : t('projects.cta.visit')}
                    </a>
                </div>
            </Section>
        );
    }

    return (
        <React.Suspense fallback={<Loader />}>
            <div className="container mx-auto max-w-7xl my-12 p-4 sm:p-8 bg-black/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
                {projectContent()}
            </div>
        </React.Suspense>
    );
};

export default ProjectDetail;