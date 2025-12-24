import { useTranslation } from 'react-i18next';
import neuroinformaticaImg from '../assets/neuroinformatica.jpg';

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <div className="who-we-are-page">
      <h1>{t('home.whoWeAre.title')}</h1>
      
      {/* Descripción general */}
      <section className="overview">
        <p className="description">{t('home.whoWeAre.description')}</p>
      </section>

      {/* Foto grupal */}
      <section className="group-photo">
        <img 
          src={neuroinformaticaImg} 
          alt="Neuroinformatics Department Team"
          className="group-image"
        />
      </section>

      {/* Contexto institucional */}
      <section className="institutional-section">
        <h2>{t('home.whoWeAre.context.title')}</h2>
        <p>{t('home.whoWeAre.context.content')}</p>
      </section>

      {/* Relación con CNeuro */}
      <section className="institutional-section">
        <h2>{t('home.whoWeAre.relationship.title')}</h2>
        <p>{t('home.whoWeAre.relationship.content')}</p>
      </section>

      {/* Misión */}
      <section className="mission-section">
        <h2>{t('home.whoWeAre.mission.title')}</h2>
        <p>{t('home.whoWeAre.mission.content')}</p>
      </section>

      {/* Alcance del trabajo */}
      <section className="scope-section">
        <h2>{t('home.whoWeAre.scope.title')}</h2>
        <ul className="scope-list">
          {(t('home.whoWeAre.scope.areas', { returnObjects: true }) as string[]).map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
