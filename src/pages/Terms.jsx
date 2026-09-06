import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionTitle from '../components/SectionTitle';

export default function Terms() {
  return (
    <main className="privacy-page">
      <PageMeta
        title="Terms & Conditions | Conzaura"
        description="Read Conzaura's terms and conditions. Understand our policies and user agreements for using our services."
      />

      <section className="section privacy-policy-section" id="terms-conditions">
        <div className="container">
          <SectionTitle
            eyebrow="LEGAL"
            title={'Terms & <em>Conditions</em>'}
            description="Read Conzaura's terms and conditions. Understand our policies, user agreements, and service conditions."
          />

          <div className="privacy-grid">
            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">01</div>
              <h3>Acceptance of Terms</h3>
              <p>
                By accessing and using our website (conzaura.co), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, you are advised not to use the Website or any related services.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">02</div>
              <h3>Use of the Website</h3>
              <p>
                <strong>License:</strong> Conzaura grants you a limited, non-exclusive, and revocable license to access and use the Website for informational and personal purposes only.<br/><br/>
                <strong>Prohibited Activities:</strong> You agree not to violate any laws, attempt unauthorized access, use the Website for illegal purposes, or upload harmful code.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">03</div>
              <h3>Intellectual Property</h3>
              <p>
                All content on the Website, including text, graphics, logos, and software, is the property of Conzaura and is protected under copyright laws. Unauthorized use of trademarks and service marks is strictly prohibited.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">04</div>
              <h3>Disclaimer of Warranties</h3>
              <p>
                The Website and its content are provided "as is" and "as available" without any warranties, express or implied. Conzaura does not guarantee the accuracy, completeness, or reliability of the content or functionality.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">05</div>
              <h3>Limitation of Liability</h3>
              <p>
                Conzaura shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of the Website or inability to use the Website, including any errors, interruptions, or delays.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-number" aria-hidden="true">06</div>
              <h3>Modifications to Terms</h3>
              <p>
                Conzaura reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Continued use of the Website signifies your acceptance of the updated Terms.
              </p>
            </article>
          </div>

          <div className="privacy-footer-note">
            <p>
              <strong>Last updated:</strong> September 2026. By using our website and services,
              you agree to these Terms and Conditions.
            </p>
            <p>
              For any questions regarding our Terms and Conditions, please contact us at{' '}
              <a href="mailto:info@conzaura.co">info@conzaura.co</a> or{' '}
              <Link to="/contact">visit our contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
