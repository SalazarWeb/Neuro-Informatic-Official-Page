import { useTranslation } from 'react-i18next';
import { clusterResources } from '../../data/cluster';

export default function Cluster() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  return (
    <div className="cluster">
      <h1>{t('cluster.title')}</h1>
      <p className="cluster-intro">{t('cluster.description')}</p>
      
      <div className="resources-list">
        {clusterResources.map((resource) => (
          <article key={resource.id} className="resource-card">
            <h2>{resource.name}</h2>
            <p className="resource-description">{resource.description[currentLang]}</p>
            
            <section className="specifications">
              <h3>{t('cluster.specifications')}</h3>
              <dl>
                {resource.specs.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <dt>{spec.label[currentLang]}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            
            <section className="access-info">
              <h3>{t('cluster.access')}</h3>
              <p>{resource.access[currentLang]}</p>
            </section>
          </article>
        ))}
      </div>
    </div>
  );
}
