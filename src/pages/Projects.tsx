import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { members } from '../../data/members';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  return (
    <div className="projects">
      <h1>{t('projects.title')}</h1>
      
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-header">
              <h2>{project.title[currentLang]}</h2>
              <span className={`status status-${project.status}`}>
                {t(`projects.${project.status}`)}
              </span>
            </div>
            
            <p className="project-description">{project.description[currentLang]}</p>
            
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Period:</span>
                <span>{project.startDate} — {project.endDate || 'Present'}</span>
              </div>
              
              {project.funding && (
                <div className="meta-item">
                  <span className="meta-label">{t('projects.funding')}:</span>
                  <span>{project.funding[currentLang]}</span>
                </div>
              )}
              
              <div className="meta-item">
                <span className="meta-label">Members:</span>
                <span>
                  {project.members.map(memberId => {
                    const member = members.find(m => m.id === memberId);
                    return member?.name;
                  }).join(', ')}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
