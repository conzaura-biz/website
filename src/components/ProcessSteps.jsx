const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Share your business needs and get guidance on the right registration option.',
  },
  {
    number: '02',
    title: 'Get Expert Guidance',
    description: 'Our experts guide you through the documents, requirements, and registration process.',
  },
  {
    number: '03',
    title: 'Complete Your Registration',
    description: 'We support you through the final steps so you can move forward with confidence.',
  },
];

export default function ProcessSteps() {
  return (
    <div className="process-grid">
      <div className="process-label">
        <span>
          Simple Steps.
          <br />
          Expert Support.
        </span>
      </div>

      {steps.map((step, index) => (
        <article className="process-step" key={`${step.number}-${index}`}>
          <span className="process-number">{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  );
}
