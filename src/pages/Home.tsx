import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <section className="hero">
        <h1>{t('home.title')}</h1>
        <p className="subtitle">{t('home.subtitle')}</p>
        <div className="hero-actions">
          <Link to="/who-we-are" className="btn-primary">
            {t('nav.whoWeAre')}
          </Link>
        </div>
      </section>

      {/* Sección de acceso rápido a las principales áreas */}
      <section className="quick-access">
        <div className="access-grid">
          <Link to="/people" className="access-card">
            <h3>{t('nav.people')}</h3>
          </Link>
          <Link to="/projects" className="access-card">
            <h3>{t('nav.projects')}</h3>
          </Link>
          <Link to="/students" className="access-card">
            <h3>{t('nav.students')}</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
