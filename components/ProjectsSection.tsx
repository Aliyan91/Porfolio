'use client';

import { useState, useMemo } from 'react';
import { portfolioData, Project } from '@/lib/data';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const filters = useMemo(() => {
    const categories = projects.map((p) => p.category);
    return ['All', ...new Set(categories)];
  }, [projects]);

  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    const newFiltered = filter === 'All' 
      ? projects 
      : projects.filter((p) => p.category === filter);
    setActiveProject(newFiltered[0] || projects[0]);
  };

  return (
    <section id="work" className="py-[72px] border-t border-white/[0.06]">
      <div className="w-[min(calc(100%-40px),1180px)] mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,430px)] gap-2 mb-[30px] items-end">
          <div>
            <p className="m-0 mb-3.5 text-teal uppercase text-[0.8rem] font-bold tracking-[0.08em]">
              Projects
            </p>
            <h2 className="m-0 mb-4 text-[1.75rem] md:text-[2.4rem] leading-[1.05]">
              Selected work from my resume and hands-on development experience
            </h2>
          </div>
          <p className="max-w-[62ch] text-base leading-[1.75] text-text-muted">
            These projects reflect the kind of systems I enjoy building most: secure platforms,
            admin workflows, data-heavy dashboards, and polished user-facing products.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 mb-[22px]" role="group" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`min-h-[38px] px-3.5 rounded-full border font-inherit cursor-pointer transition-all hover:-translate-y-[1px] ${
                filter === activeFilter
                  ? 'bg-white/[0.08] border-white/[0.24] text-text'
                  : 'border-line bg-transparent text-text-muted'
              }`}
              aria-pressed={filter === activeFilter}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-[18px]">
          {/* Project List */}
          <div className="grid gap-[14px]">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`w-full p-5 text-left text-inherit font-inherit cursor-pointer border rounded-lg bg-gradient-to-b from-white/[0.03] to-white/[0.01] transition-all hover:-translate-y-[1px] ${
                  project.id === activeProject.id
                    ? 'border-teal/[0.55] bg-gradient-to-b from-teal/[0.11] to-white/[0.02]'
                    : 'border-line'
                }`}
                type="button"
              >
                <div className="flex items-center justify-between gap-3 mb-3.5 text-[0.92rem] text-text-muted">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-2.5 mb-3">
                  <h3 className="m-0 text-[1.15rem] leading-[1.2]">{project.title}</h3>
                  <span className="inline-flex items-center min-h-[30px] px-2.5 rounded-full bg-teal/[0.12] text-teal text-[0.84rem] font-bold">
                    {project.strapline}
                  </span>
                </div>
                <p className="m-0 text-text-muted leading-[1.65]">{project.summary}</p>
              </button>
            ))}
          </div>

          {/* Project Spotlight */}
          <aside 
            className="p-7 border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-white/[0.01]"
            aria-live="polite"
          >
            <div className="flex flex-wrap items-center justify-between gap-3.5 mb-4">
              <span className="inline-flex items-center min-h-[30px] px-2.5 rounded-full bg-teal/[0.12] text-teal text-[0.84rem] font-bold">
                {activeProject.category}
              </span>
              <span className="text-[0.92rem] text-text-muted">{activeProject.year}</span>
            </div>
            
            <h3 className="m-0 mb-2.5 text-[1.15rem] leading-[1.2]">{activeProject.title}</h3>
            <p className="m-0 max-w-[62ch] text-base leading-[1.75] text-text-muted">
              {activeProject.detail}
            </p>
            
            <div className="h-px my-6 bg-line" />
            
            <h3 className="m-0 mb-3 text-[1.15rem] leading-[1.2]">Key contributions</h3>
            <ul className="m-0 pl-[18px] leading-[1.8]">
              {activeProject.outcomes.map((outcome, index) => (
                <li key={index} className="text-text-muted">{outcome}</li>
              ))}
            </ul>
            
            <div className="h-px my-6 bg-line" />
            
            <h3 className="m-0 mb-3 text-[1.15rem] leading-[1.2]">Stack and strengths</h3>
            <ul className="flex flex-wrap gap-2.5 p-0 list-none">
              {activeProject.stack.map((item) => (
                <li 
                  key={item}
                  className="min-h-[34px] px-3 border border-line rounded-full inline-flex items-center justify-center text-[0.92rem] text-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            
            <a 
              href={activeProject.linkHref}
              className="inline-flex items-center mt-[22px] text-text font-semibold hover:underline"
            >
              {activeProject.linkLabel}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
