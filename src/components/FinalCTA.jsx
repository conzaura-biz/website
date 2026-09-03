import Button from './Button';

export default function FinalCTA() {
  return (
    <section className="final-cta" aria-label="Free consultation call to action">
      <div className="container final-cta-inner">
        <p>Arrange your free initial consultation today.</p>
        <Button to="/contact" variant="light">Book Free Consultation</Button>
      </div>
    </section>
  );
}
