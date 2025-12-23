import { useTranslation } from 'react-i18next';
import { students } from '../data/students';
import { members } from '../data/members';
import { projects } from '../data/projects';
import type { Student } from '../types';

export default function Students() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';

  const levels: Student['level'][] = ['phd', 'master', 'undergraduate'];

  const getStudentsByLevel = (level: Student['level'], includeAlumni: boolean = false) => {
    return students.filter(
      (s) => s.level === level && (includeAlumni ? !!s.endYear : !s.endYear)
    );
  };

  const getSupervisorName = (supervisorId: string) => {
    const supervisor = members.find((m) => m.id === supervisorId);
    return supervisor?.name || supervisorId;
  };

  const getProjectTitle = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    return project?.title[currentLang] || projectId;
  };

  const renderStudentCard = (student: Student) => {
    const isAlumni = !!student.endYear;

    return (
      <article key={student.id} className="student-card">
        <div className="student-header">
          <h3 className="student-name">{student.name}</h3>
          {!isAlumni && student.expectedGraduation && (
            <span className="expected-grad">
              {t('students.expected')}: {student.expectedGraduation}
            </span>
          )}
        </div>

        <div className="student-info">
          <div className="info-row">
            <span className="info-label">{t('students.program')}:</span>
            <span className="info-value">{student.program[currentLang]}</span>
          </div>

          <div className="info-row">
            <span className="info-label">{t('students.supervisor')}:</span>
            <span className="info-value">{getSupervisorName(student.supervisor)}</span>
          </div>

          <div className="info-row">
            <span className="info-label">
              {isAlumni ? t('students.completed') : t('students.started')}:
            </span>
            <span className="info-value">
              {student.startYear}
              {isAlumni && student.endYear && ` — ${student.endYear}`}
            </span>
          </div>

          {student.project && (
            <div className="info-row">
              <span className="info-label">{t('students.project')}:</span>
              <span className="info-value">{getProjectTitle(student.project)}</span>
            </div>
          )}

          {student.email && (
            <div className="info-row">
              <span className="info-label">Email:</span>
              <a href={`mailto:${student.email}`} className="info-value student-email">
                {student.email}
              </a>
            </div>
          )}
        </div>

        {student.researchInterests && student.researchInterests[currentLang].length > 0 && (
          <div className="research-interests">
            <h4>{t('students.researchInterests')}</h4>
            <ul>
              {student.researchInterests[currentLang].map((interest, idx) => (
                <li key={idx}>{interest}</li>
              ))}
            </ul>
          </div>
        )}

        {student.thesis && (
          <div className="thesis-info">
            <strong>Thesis:</strong> {student.thesis[currentLang]}
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="students-page">
      <header className="students-header">
        <h1>{t('students.title')}</h1>
        <p className="students-subtitle">{t('students.subtitle')}</p>
      </header>

      {/* Current Students by Level */}
      <section className="current-students-section">
        <h2 className="section-main-title">{t('students.current')}</h2>

        {levels.map((level) => {
          const levelStudents = getStudentsByLevel(level, false);
          if (levelStudents.length === 0) return null;

          return (
            <div key={level} className="level-section">
              <h3 className="level-title">{t(`students.levels.${level}`)}</h3>
              <div className="students-grid">
                {levelStudents.map(renderStudentCard)}
              </div>
            </div>
          );
        })}
      </section>

      {/* Alumni */}
      {students.some((s) => s.endYear) && (
        <section className="alumni-section">
          <h2 className="section-main-title">{t('students.alumni')}</h2>

          {levels.map((level) => {
            const alumni = getStudentsByLevel(level, true);
            if (alumni.length === 0) return null;

            return (
              <div key={level} className="level-section">
                <h3 className="level-title">{t(`students.levels.${level}`)}</h3>
                <div className="students-grid">
                  {alumni.map(renderStudentCard)}
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
