import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { members } from '../data/members';

export default function People() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  // Separar miembros por categoría
  const labMembers = members.filter(m => m.category === 'lab-member');
  const collaborators = members.filter(m => m.category === 'collaborator');

  const renderPersonCard = (member: typeof members[0]) => (
    <article key={member.id} className="person-card">
      {member.photo && (
        <img 
          src={member.photo} 
          alt={member.name}
          className="person-photo"
        />
      )}
      <Link to={`/people/${member.id}`} className="person-name-link">
        <h3>{member.name}</h3>
      </Link>
      <p className="person-role">{member.role[currentLang]}</p>
    </article>
  );

  return (
    <div className="people">
      <h1>{t('people.title')}</h1>
      
      {/* Lab Members */}
      {labMembers.length > 0 && (
        <section className="people-section">
          <h2>{t('people.labMembers')}</h2>
          <div className="people-grid">
            {labMembers.map(renderPersonCard)}
          </div>
        </section>
      )}

      {/* Collaborators */}
      {collaborators.length > 0 && (
        <section className="people-section">
          <h2>{t('people.collaborators')}</h2>
          <div className="people-grid">
            {collaborators.map(renderPersonCard)}
          </div>
        </section>
      )}
    </div>
  );
}
