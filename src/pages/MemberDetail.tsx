import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { members } from '../../data/members';

export default function PersonProfile() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  const member = members.find(m => m.id === id);

  if (!member) {
    return (
      <div className="person-profile">
        <p>Person not found</p>
        <Link to="/people">← {t('people.profile.backToPeople')}</Link>
      </div>
    );
  }

  return (
    <div className="person-profile">
      <Link to="/people" className="back-link">← {t('people.profile.backToPeople')}</Link>
      
      <header className="person-header">
        {member.photo && (
          <img 
            src={member.photo} 
            alt={member.name}
            className="person-photo-large"
          />
        )}
        <div className="person-info">
          <h1>{member.name}</h1>
          <p className="role">{member.role[currentLang]}</p>
          <a href={`mailto:${member.email}`} className="email">{member.email}</a>
          
          <div className="academic-links">
            {member.orcid && (
              <a href={`https://orcid.org/${member.orcid}`} target="_blank" rel="noopener noreferrer">
                ORCID
              </a>
            )}
            {member.googleScholar && (
              <a href={member.googleScholar} target="_blank" rel="noopener noreferrer">
                Google Scholar
              </a>
            )}
            {member.researchGate && (
              <a href={member.researchGate} target="_blank" rel="noopener noreferrer">
                ResearchGate
              </a>
            )}
          </div>
        </div>
      </header>

      <section className="bio">
        <h2>{t('people.profile.biography')}</h2>
        <p>{member.bio[currentLang]}</p>
      </section>

      <section className="education">
        <h2>{t('people.profile.education')}</h2>
        <ul>
          {member.education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.degree}</strong> — {edu.institution} ({edu.year})
            </li>
          ))}
        </ul>
      </section>

      <section className="research">
        <h2>{t('people.profile.research')}</h2>
        <ul>
          {member.research[currentLang].map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </section>

      {member.publications && member.publications.length > 0 && (
        <section className="publications">
          <h2>{t('people.profile.publications')}</h2>
          <ul>
            {member.publications.map((pub, index) => (
              <li key={index}>
                <p className="pub-title">{pub.title}</p>
                <p className="pub-meta">
                  {pub.authors} ({pub.year}). <em>{pub.journal}</em>
                  {pub.doi && (
                    <> <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                      DOI: {pub.doi}
                    </a></>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
