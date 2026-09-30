import "../App.css";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="brand-logo">
              <span className="brand-mark">L</span>
              Leads Academy
            </h3>
            <p className="brand-tagline">
              Empowering students with foundation-first learning, structured mentorship, and
              proven results.
            </p>
          </div>

          <div className="footer-highlights">
            <div className="highlight-card">
              <span className="icon">
                <Icon name="cap" size={20} />
              </span>
              <div>
                <span className="highlight-title">Expert Faculty</span>
                <span className="highlight-sub">Personalized Guidance</span>
              </div>
            </div>
            <div className="highlight-card">
              <span className="icon">
                <Icon name="star" size={20} />
              </span>
              <div>
                <span className="highlight-title">Proven Results</span>
                <span className="highlight-sub">Top Board Performers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 <strong>Leads Academy</strong>. All Rights Reserved.
          </p>
          <p className="developer-tag">
            Designed & Developed with{" "}
            <Icon name="heart" size={13} filled className="heart" /> by{" "}
            <a
              href="https://www.linkedin.com/in/kedarnath-mandal-74299a399/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              Kedarnath Mandal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
