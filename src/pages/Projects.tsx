import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { members } from '../data/members';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  const activeProjects = projects.filter((p) => p.status === 'active');
  const completedProjects = projects.filter((p) => p.status === 'completed');

  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    return month ? `${month}/${year}` : year;
  };

  const renderProject = (project: typeof projects[0]) => {
    const projectMembers = project.members
      .map((memberId) => members.find((m) => m.id === memberId))
      .filter(Boolean);

    return (
      <article key={project.id} className="project-card">
        <div className="project-header">
          <h2 className="project-title">{project.title[currentLang]}</h2>
          <span className={`project-status status-${project.status}`}>
            {t(`projects.${project.status}`)}
          </span>
        </div>

        <p className="project-description">{project.description[currentLang]}</p>

        <div className="project-info">
          <div className="info-row">
            <span className="info-label">{t('projects.period')}:</span>
            <span className="info-value">
              {formatDate(project.startDate)} — {project.endDate ? formatDate(project.endDate) : t('projects.present')}
            </span>
          </div>

          <div className="info-row">
            <span className="info-label">{t('projects.researchers')}:</span>
            <span className="info-value">
              {projectMembers.map((m) => m?.name).join(', ')}
            </span>
          </div>

          {project.funding && (
            <div className="info-row">
              <span className="info-label">{t('projects.funding')}:</span>
              <span className="info-value">{project.funding[currentLang]}</span>
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="projects-page">
      <header className="page-header">
        <h1>{t('projects.title')}</h1>
        <p className="page-description">{t('projects.description')}</p>
      </header>

      {activeProjects.length > 0 && (
        <section className="projects-section">
          <h2 className="section-title">{t('projects.active')}</h2>
          <div className="projects-list">
            {activeProjects.map(renderProject)}
          </div>
        </section>
      )}

      {completedProjects.length > 0 && (
        <section className="projects-section">
          <h2 className="section-title">{t('projects.completed')}</h2>
          <div className="projects-list">
            {completedProjects.map(renderProject)}
          </div>
        </section>
      )}
    </div>
  );
}
