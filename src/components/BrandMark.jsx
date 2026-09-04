import asset from '../utils/asset';

export default function BrandMark({ className = '' }) {
  return (
    <img
      className={`brand-mark ${className}`.trim()}
      src={asset('/conzaura-mark.png')}
      alt=""
      aria-hidden="true"
    />
  );
}
