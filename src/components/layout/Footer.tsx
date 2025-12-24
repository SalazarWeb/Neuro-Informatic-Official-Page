import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('footer.contact')}</h3>
          <p>
            <a href="mailto:info@cneuro.edu">info@cneuro.edu</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>{t('footer.address')}</h3>
          <address>
            Centro de Neurociencias de Cuba
          </address>
        </div>

        <div className="footer-section">
          <p className="copyright">
            © {new Date().getFullYear()} CNeuro - Departamento de Neuroinformática
          </p>
        </div>
      </div>
    </footer>
  );
}
