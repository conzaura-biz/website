import Icon from './Icon';

export default function TestimonialCard({ item }) {
  const avatars = {
    'Laura Chen': '/avatars/trust-1.png',
    'Mark Thompson': '/avatars/trust-2.png',
    'David Kim': '/avatars/trust-3.png',
  };

  return (
    <article className="testimonial-card">
      <header className="testimonial-person">
        <img src={avatars[item.name] || '/favicon.png'} alt="" />
        <div><strong>{item.name}</strong><span>@ {item.role}</span></div>
      </header>
      <div className="testimonial-body">
        <p>{item.text}</p>
        <footer><span>{item.date || '15.12.2025'}</span><span className="testimonial-grid-icon" aria-hidden="true"><Icon name="gst" size={14} /></span></footer>
      </div>
    </article>
  );
}
