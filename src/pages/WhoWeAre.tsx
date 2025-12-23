import { useTranslation } from 'react-i18next';

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <div className="who-we-are-page">
      <h1>{t('home.whoWeAre.title')}</h1>
      
      <section className="mission">
        <p className="description">{t('home.whoWeAre.description')}</p>
      </section>

      <section className="group-photo">
        <img 
          src="/images/group-photo.jpg" 
          alt="Neuroinformatics Department Team"
          className="group-image"
        />
      </section>

      {/* Opcional: Agregar más secciones como misión, visión, historia */}
    </div>
  );
}
