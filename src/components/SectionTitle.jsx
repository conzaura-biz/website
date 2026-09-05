import BrandMark from './BrandMark';

export default function SectionTitle({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = 'center',
  light = false,
}) {
  return (
    <div className={`section-title align-${align} ${light ? 'is-light' : ''}`}>
      {eyebrow && (
        <div className="eyebrow">
          {eyebrowIcon || <BrandMark />}
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p>{description}</p>}
    </div>
  );
}
