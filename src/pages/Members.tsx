import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { members } from '../../data/members';

export default function People() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  return (
    <div className="people">
      <h1>{t('people.title')}</h1>
      
      <div className="people-grid">
        {members.map((member) => (
          <article key={member.id} className="person-card">
            {member.photo && (
              <img 
                src={member.photo} 
                alt={member.name}
                className="person-photo"
              />
            )}
            <h3>{member.name}</h3>
            <p className="person-role">{member.role[currentLang]}</p>
            <Link to={`/people/${member.id}`} className="view-profile">
              {t('people.viewProfile')}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
