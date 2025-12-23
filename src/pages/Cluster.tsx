import { useTranslation } from 'react-i18next';
import { clusterResources, clusterDocuments } from '../data/cluster';
import type { ClusterDocument } from '../types';

export default function Cluster() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  const categories = ['getting-started', 'technical-guide', 'tutorial', 'resource'] as const;

  const getDocumentsByCategory = (category: ClusterDocument['category']) => {
    return clusterDocuments.filter((doc) => doc.category === category);
  };

  const renderDocumentCard = (doc: ClusterDocument) => {
    const isExternal = doc.type === 'external-link';
    const isDownload = doc.type === 'download';

    return (
      <article key={doc.id} className="document-card">
        <div className="document-icon">{doc.icon || '📄'}</div>
        
        <div className="document-content">
          <h3 className="document-title">{doc.title[currentLang]}</h3>
          <p className="document-description">{doc.description[currentLang]}</p>
          
          <div className="document-meta">
            {doc.lastUpdated && (
              <span className="meta-item">
                {t('cluster.lastUpdated')}: {doc.lastUpdated}
              </span>
            )}
            {doc.fileSize && (
              <span className="meta-item">
                {t('cluster.fileSize')}: {doc.fileSize}
              </span>
            )}
          </div>
        </div>

        <div className="document-actions">
          {isDownload && doc.downloadUrl && (
            <a
              href={doc.downloadUrl}
              download
              className="btn-action btn-download"
              aria-label={t('cluster.download')}
            >
              <span className="btn-icon">⬇️</span>
              <span className="btn-text">{t('cluster.download')}</span>
            </a>
          )}
          {!isDownload && doc.url && (
            <a
              href={doc.url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="btn-action btn-view"
              aria-label={t('cluster.viewDocument')}
            >
              <span className="btn-icon">{isExternal ? '🔗' : '👁️'}</span>
              <span className="btn-text">
                {isExternal ? t('cluster.externalLink') : t('cluster.viewDocument')}
              </span>
            </a>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="cluster-page">
      <header className="cluster-header">
        <h1>{t('cluster.title')}</h1>
        <p className="cluster-subtitle">{t('cluster.subtitle')}</p>
      </header>

      {/* Información del cluster */}
      <section className="cluster-info-section">
        {clusterResources.map((resource) => (
          <div key={resource.id} className="cluster-info-card">
            <h2>{resource.name}</h2>
            <p className="cluster-description">{resource.description[currentLang]}</p>
            
            <div className="cluster-specs">
              <h3>{t('cluster.specifications')}</h3>
              <dl className="specs-grid">
                {resource.specs.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <dt>{spec.label[currentLang]}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            
            <div className="cluster-access">
              <h3>{t('cluster.access')}</h3>
              <p>{resource.access[currentLang]}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Documentación */}
      <section className="documentation-section">
        <h2 className="section-main-title">{t('cluster.documentation')}</h2>
        
        {categories.map((category) => {
          const docs = getDocumentsByCategory(category);
          if (docs.length === 0) return null;

          return (
            <div key={category} className="category-section">
              <h3 className="category-title">
                {t(`cluster.categories.${category}`)}
              </h3>
              
              <div className="documents-grid">
                {docs.map(renderDocumentCard)}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
