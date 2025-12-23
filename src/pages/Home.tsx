import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Logo y título institucional */}
      <section className="institutional-header">
        <img src="/CNeuro.png" alt="CNeuro Logo" className="home-logo" />
        <h1>{t('home.title')}</h1>
        <p className="institutional-subtitle">{t('home.subtitle')}</p>
      </section>

      {/* Foto grupal del departamento */}
      <section className="group-photo-section">
        <img 
          src="/images/group-photo.jpg" 
          alt="Neuroinformatics Department Team"
          className="group-photo"
        />
      </section>

      {/* Introducción institucional */}
      <section className="introduction">
        <p className="intro-text">{t('home.introduction')}</p>
      </section>

      {/* Rol dentro de CNeuro */}
      <section className="department-role">
        <p className="role-text">{t('home.role')}</p>
      </section>
    </div>
  );
}
