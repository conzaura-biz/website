import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionTitle from '../components/SectionTitle';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <PageMeta
        title="Privacy Policy | Conzaura"
        description="Your privacy matters to us. This policy outlines how we collect, use, and protect your personal information."
      />

      <section className="section privacy-policy-section" id="privacy-policy">
        <div className="container">
          <SectionTitle
            eyebrow="LEGAL"
            title={'Privacy & <em>Policy</em>'}
            description="Your privacy matters to us. This policy outlines how we collect, use, and protect your personal information."
          />

          <div className="privacy-grid">
            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">01</div>
              <h3>Information We Collect</h3>
              <p>
                We collect personal information that you voluntarily provide when using our
                services, including your name, email address, phone number, and business
                details submitted through our consultation forms and contact pages.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">02</div>
              <h3>How We Use Your Data</h3>
              <p>
                Your information is used to provide business registration and consultation
                services, respond to your enquiries, send relevant updates, and improve our
                services. We will never sell your personal data to third parties.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">03</div>
              <h3>Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal
                information from unauthorised access, alteration, disclosure, or destruction.
                All data transmissions are encrypted using SSL technology.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">04</div>
              <h3>Cookies &amp; Tracking</h3>
              <p>
                Our website uses cookies to enhance your browsing experience and analyse site
                traffic. You can manage your cookie preferences through your browser settings.
                We use analytics tools to understand how visitors interact with our site.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">05</div>
              <h3>Third-Party Sharing</h3>
              <p>
                We may share your information with trusted partners solely for the purpose of
                providing our services, such as government registrars and legal advisors. All
                partners are bound by strict confidentiality agreements.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">06</div>
              <h3>Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal data at any time.
                You may also opt out of marketing communications. To exercise your rights,
                contact us at{' '}
                <a href="mailto:info@conzaura.co">info@conzaura.co</a>.
              </p>
            </article>
          </div>

          <div className="privacy-footer-note">
            <p>
              <strong>Last updated:</strong> September 2026. By using our website and services,
              you agree to this privacy policy. We may update this policy from time to time,
              and any changes will be posted on this page.
            </p>
            <p>
              For any questions regarding our privacy practices, please{' '}
              <Link to="/contact">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
