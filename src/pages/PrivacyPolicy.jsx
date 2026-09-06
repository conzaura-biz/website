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
                We may collect various types of information to deliver and enhance our services, including <strong>Personal Information</strong> (name, email, phone), <strong>Account Information</strong> (username, password), <strong>Usage Data</strong> (IP addresses, device information, pages visited), and <strong>Third-Party Data</strong> (shared by trusted partners or social media).
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">02</div>
              <h3>How We Use Your Information</h3>
              <p>
                We use the collected information to process orders and deliver services, use analytics to enhance website functionality, share updates and promotional offers, and fulfill legal obligations under applicable laws.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">03</div>
              <h3>Sharing Your Information</h3>
              <p>
                We may share your information with service providers (payment processing, hosting), for legal requirements, during business transfers (mergers/acquisitions), and for marketing purposes using aggregated data.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">04</div>
              <h3>Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal information. However, no online data transmission can be guaranteed secure. While we strive to protect your data, providing information online is at your own risk.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">05</div>
              <h3>Cookies and Tracking Technologies</h3>
              <p>
                We use cookies, web beacons, and other technologies to enhance your browsing experience. You can manage cookie preferences in your browser settings, but some site features may not function properly if you do so.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">06</div>
              <h3>Third-Party Websites &amp; Children&#x27;s Privacy</h3>
              <p>
                Our website may include links to external services. We are not responsible for their privacy practices. Our services are not intended for children under 18 years of age. If we have collected such data, contact us to delete it.
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
