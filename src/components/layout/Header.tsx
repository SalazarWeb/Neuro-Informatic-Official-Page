import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import aboutIcon from '../../assets/about.svg';
import peopleIcon from '../../assets/people.svg';
import projectsIcon from '../../assets/projects.svg';
import clusterIcon from '../../assets/cluster.svg';
import studentsIcon from '../../assets/students.svg';

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
          <img src="/CNeuro.png" alt="CNeuro Neuroinformatics" />
          <span className="logo-text">Neuroinformática</span>
        </Link>

        <nav className="main-nav">
          <Link to="/people" className={isActive('/people') || location.pathname.startsWith('/people/') ? 'active' : ''}>
            <img src={peopleIcon} alt="" className="nav-icon" />
            <span className="nav-text">{t('nav.people')}</span>
          </Link>
          <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
            <img src={projectsIcon} alt="" className="nav-icon" />
            <span className="nav-text">{t('nav.projects')}</span>
          </Link>
          <Link to="/cluster" className={isActive('/cluster') ? 'active' : ''}>
            <img src={clusterIcon} alt="" className="nav-icon" />
            <span className="nav-text">{t('nav.cluster')}</span>
          </Link>
          <Link to="/students" className={isActive('/students') ? 'active' : ''}>
            <img src={studentsIcon} alt="" className="nav-icon" />
            <span className="nav-text">{t('nav.students')}</span>
          </Link>
          <Link to="/who-we-are" className={isActive('/who-we-are') ? 'active' : ''}>
            <img src={aboutIcon} alt="" className="nav-icon" />
            <span className="nav-text">{t('nav.whoWeAre')}</span>
          </Link>
        </nav>

        <button onClick={toggleLanguage} className="lang-toggle">
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}
