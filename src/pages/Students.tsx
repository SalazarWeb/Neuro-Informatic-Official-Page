import { useTranslation } from 'react-i18next';
import { students } from '../../data/students';
import { members } from '../../data/members';

export default function Students() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  const currentStudents = students.filter(s => !s.endYear);
  const alumni = students.filter(s => s.endYear);

  const getSupervisorName = (supervisorId: string) => {
    const supervisor = members.find(m => m.id === supervisorId);
    return supervisor?.name || supervisorId;
  };

  return (
    <div className="students">
      <h1>{t('students.title')}</h1>
      
      <section className="current-students">
        <h2>{t('students.current')}</h2>
        <div className="students-list">
          {currentStudents.map((student) => (
            <article key={student.id} className="student-card">
              <h3>{student.name}</h3>
              <p className="program">{student.program[currentLang]}</p>
              <p className="supervisor">
                <span className="label">{t('students.supervisor')}:</span> {getSupervisorName(student.supervisor)}
              </p>
              <p className="year">Started: {student.startYear}</p>
              {student.email && (
                <a href={`mailto:${student.email}`} className="email">{student.email}</a>
              )}
            </article>
          ))}
        </div>
      </section>

      {alumni.length > 0 && (
        <section className="alumni">
          <h2>{t('students.alumni')}</h2>
          <div className="students-list">
            {alumni.map((student) => (
              <article key={student.id} className="student-card">
                <h3>{student.name}</h3>
                <p className="program">{student.program[currentLang]}</p>
                <p className="supervisor">
                  <span className="label">{t('students.supervisor')}:</span> {getSupervisorName(student.supervisor)}
                </p>
                <p className="year">{student.startYear} — {student.endYear}</p>
                {student.thesis && (
                  <p className="thesis">{student.thesis[currentLang]}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
