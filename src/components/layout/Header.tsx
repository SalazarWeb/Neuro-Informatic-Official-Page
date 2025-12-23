import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/cneuro-logo.svg" alt="CNeuro Neuroinformatics" />
          <span className="logo-text">Neuroinformática</span>
        </Link>

        <nav className="main-nav">
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            {t('nav.home')}
          </Link>
          <Link to="/who-we-are" className={isActive('/who-we-are') ? 'active' : ''}>
            {t('nav.whoWeAre')}
          </Link>
          <Link to="/people" className={isActive('/people') || location.pathname.startsWith('/people/') ? 'active' : ''}>
            {t('nav.people')}
          </Link>
          <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
            {t('nav.projects')}
          </Link>
          <Link to="/cluster" className={isActive('/cluster') ? 'active' : ''}>
            {t('nav.cluster')}
          </Link>
          <Link to="/students" className={isActive('/students') ? 'active' : ''}>
            {t('nav.students')}
          </Link>
        </nav>

        <button onClick={toggleLanguage} className="lang-toggle">
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}
