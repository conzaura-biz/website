import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function Terms() {
  return (
    <main className="legal-page">
      <PageMeta
        title="Terms of Service | Conzaura"
        description="Read Conzaura's terms of service. Understand our policies, user agreements, and service conditions."
      />

      <div className="container">
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <p>
            By accessing and using our website (conzaura.co), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, you are advised not to use the Website or any related services.
          </p>

          <h3>Use of the Website</h3>
          <ul>
            <li><strong>License:</strong> Conzaura grants you a limited, non-exclusive, and revocable license to access and use the Website for informational and personal purposes only.</li>
            <li><strong>To Improve Experiences:</strong> Use analytics to enhance website functionality, develop new features, and personalize content.</li>
            <li><strong>Prohibited Activities:</strong> While using the Website, you agree not to:
              <ul>
                <li>Violate any applicable laws or regulations.</li>
                <li>Attempt unauthorized access to the Website, its servers, or related systems.</li>
                <li>Use the Website for illegal or unethical purposes.</li>
                <li>Upload or transmit harmful code, viruses, or malicious software.</li>
              </ul>
            </li>
          </ul>

          <h3>Intellectual Property</h3>
          <ul>
            <li><strong>Copyright:</strong> All content on the Website, including text, graphics, logos, and software, is the property of Conzaura and is protected under copyright laws.</li>
            <li><strong>Trademarks:</strong> All trademarks, logos, and service marks displayed on the Website are the property of Conzaura or their respective owners. Unauthorized use is strictly prohibited.</li>
          </ul>

          <h3>Privacy Policy</h3>
          <p>
            Your use of the Website is also governed by our Privacy Policy. By using the Website, you consent to the collection and use of your information as described in our Privacy Policy.
          </p>

          <h3>Third-Party Content and Links</h3>
          <p>
            The Website may contain links to third-party websites. Conzaura does not endorse or take responsibility for the content, policies, or practices of these websites. You access third-party websites at your own risk.
          </p>

          <h3>Disclaimer of Warranties</h3>
          <ul>
            <li>The Website and its content are provided "as is" and "as available" without any warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</li>
            <li>Conzaura does not guarantee the accuracy, completeness, or reliability of the content or functionality of the Website.</li>
          </ul>

          <h3>Limitation of Liability</h3>
          <p>
            Conzaura shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of the Website or inability to use the Website, including any errors, interruptions, or delays.
          </p>

          <h3>Modifications to Terms</h3>
          <p>
            Conzaura reserves the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting the updated Terms on the Website. It is your responsibility to review the Terms periodically. Continued use of the Website signifies your acceptance of the updated Terms.
          </p>

          <h3>Security and Data</h3>
          <p>
            Conzaura stores data collected through the Website on secure servers. While we implement reasonable safeguards to protect your information, no system is entirely immune to breaches. Users are advised to exercise caution when submitting personal data online.
          </p>

          <h3>Limited License</h3>
          <p>
            Conzaura strictly prohibits the uploading, transmission, or distribution of malicious code, hacking materials, or any harmful content. Violators will be subject to immediate termination of access and legal action if necessary.
          </p>

          <h3>Contact Us</h3>
          <p>
            For any questions or concerns about these Terms and Conditions, you can contact us at:
          </p>
          <p>
            <strong>Conzaura Pvt Ltd</strong><br />
            Email: <a href="mailto:info@conzaura.co">info@conzaura.co</a>
          </p>
        </div>
      </div>
    </main>
  );
}
