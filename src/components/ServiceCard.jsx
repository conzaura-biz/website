import { Link } from 'react-router-dom';
import Icon from './Icon';

const iconMap = {
  'Firm Registration': { src: '/images/icons/services/firm-registration.png', fallback: 'building' },
  'IPR (Intellectual Property Rights)': { src: '/images/icons/services/ipr.png', fallback: 'copyright' },
  'Auditing & Accounting': { src: '/images/icons/services/auditing-accounting.png', fallback: 'audit' },
  'ITR (Income Tax)': { src: '/images/icons/services/income-tax.png', fallback: 'tax' },
  'GST Services': { src: '/images/icons/services/gst.png', fallback: 'gst' },
  'Other Registrations & Licensing': { src: '/images/icons/services/licensing.png', fallback: 'license' },
};

export default function ServiceCard({ category }) {
  const id = category.slug || category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const contactTarget = `/contact?service=${encodeURIComponent(category.services[0] || category.title)}#contact-form`;
  const icon = iconMap[category.title] || { src: '', fallback: 'license' };

  return (
    <article className="service-card" id={id}>
      <div className="service-icon" aria-hidden="true">
        {icon.src ? (
          <img
            src={icon.src}
            alt=""
            onError={(event) => {
              event.currentTarget.style.display = 'none';
              event.currentTarget.nextElementSibling.style.display = 'block';
            }}
          />
        ) : null}
        <span className="service-icon-fallback" style={{ display: icon.src ? 'none' : 'block' }}>
          <Icon name={icon.fallback} size={54} strokeWidth={2.2} />
        </span>
      </div>
      <h3>{category.title}</h3>
      <div className="service-rule" />
      <ul>
        {category.services.map((service) => (
          <li key={service}>
            <span aria-hidden="true">→</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
      <Link className="learn-more" to={contactTarget}>
        <span>Learn More</span>
        <strong aria-hidden="true">↗</strong>
      </Link>
    </article>
  );
}
