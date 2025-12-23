import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { members } from '../data/members';
import { students } from '../data/students';

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

  // Obtener estudiantes supervisados
  const supervisedStudents = member.supervisedStudents 
    ? students.filter(s => member.supervisedStudents?.includes(s.id))
    : [];

  return (
    <div className="person-profile">
      <Link to="/people" className="back-link">← {t('people.profile.backToPeople')}</Link>
      
      {/* Header con foto y contacto */}
      <header className="profile-header">
        <div className="header-main">
          {member.photo && (
            <img 
              src={member.photo} 
              alt={member.name}
              className="profile-photo"
            />
          )}
          <div className="header-info">
            <h1>{member.name}</h1>
            <p className="role">{member.role[currentLang]}</p>
            
            {/* Afiliación */}
            <div className="affiliation">
              <strong>{t('people.profile.affiliation')}:</strong>
              <p>{member.affiliation.department[currentLang]}</p>
              <p>{member.affiliation.center}</p>
            </div>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="contact-section">
          <h3>{t('people.profile.contact')}</h3>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>
            {member.phone && (
              <p><strong>Phone:</strong> {member.phone}</p>
            )}
          </div>
        </div>

        {/* Perfiles académicos y redes sociales */}
        <div className="links-section">
          {/* Perfiles académicos */}
          {(member.orcid || member.googleScholar || member.researchGate) && (
            <div className="academic-links">
              <h3>{t('people.profile.academicProfiles')}</h3>
              <div className="link-buttons">
                {member.orcid && (
                  <a href={`https://orcid.org/${member.orcid}`} target="_blank" rel="noopener noreferrer" className="link-button">
                    ORCID
                  </a>
                )}
                {member.googleScholar && (
                  <a href={member.googleScholar} target="_blank" rel="noopener noreferrer" className="link-button">
                    Google Scholar
                  </a>
                )}
                {member.researchGate && (
                  <a href={member.researchGate} target="_blank" rel="noopener noreferrer" className="link-button">
                    ResearchGate
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Redes sociales */}
          {member.socialNetworks && (
            <div className="social-links">
              <h3>{t('people.profile.socialNetworks')}</h3>
              <div className="link-buttons">
                {member.socialNetworks.twitter && (
                  <a href={member.socialNetworks.twitter} target="_blank" rel="noopener noreferrer" className="link-button">
                    Twitter
                  </a>
                )}
                {member.socialNetworks.linkedin && (
                  <a href={member.socialNetworks.linkedin} target="_blank" rel="noopener noreferrer" className="link-button">
                    LinkedIn
                  </a>
                )}
                {member.socialNetworks.github && (
                  <a href={member.socialNetworks.github} target="_blank" rel="noopener noreferrer" className="link-button">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CV */}
      <section className="profile-section">
        <h2>{t('people.profile.cv')}</h2>
        <p className="cv-text">{member.cv[currentLang]}</p>
      </section>

      {/* Formación académica */}
      <section className="profile-section">
        <h2>{t('people.profile.education')}</h2>
        <ul className="education-list">
          {member.education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.degree}</strong> — {edu.institution} ({edu.year})
            </li>
          ))}
        </ul>
      </section>

      {/* Intereses de investigación */}
      <section className="profile-section">
        <h2>{t('people.profile.research')}</h2>
        <ul className="research-list">
          {member.research[currentLang].map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </section>

      {/* Código abierto y herramientas */}
      {member.openSource && member.openSource.length > 0 && (
        <section className="profile-section">
          <h2>{t('people.profile.openSource')}</h2>
          <ul className="opensource-list">
            {member.openSource.map((tool, index) => (
              <li key={index}>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-name">
                  {tool.name}
                </a>
                <p className="tool-description">{tool.description[currentLang]}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Publicaciones */}
      {member.publications && member.publications.length > 0 && (
        <section className="profile-section">
          <h2>{t('people.profile.publications')}</h2>
          <ul className="publications-list">
            {member.publications.map((pub, index) => (
              <li key={index}>
                <p className="pub-title">{pub.title}</p>
                <p className="pub-meta">
                  {pub.authors} ({pub.year}). <em>{pub.journal}</em>
                  {pub.doi && (
                    <> — <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                      DOI: {pub.doi}
                    </a></>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Estudiantes supervisados */}
      {supervisedStudents.length > 0 && (
        <section className="profile-section">
          <h2>{t('people.profile.supervisedStudents')}</h2>
          <ul className="students-list">
            {supervisedStudents.map((student) => (
              <li key={student.id}>
                <strong>{student.name}</strong> — {student.program[currentLang]} ({student.startYear}
                {student.endYear ? `–${student.endYear}` : '–presente'})
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
