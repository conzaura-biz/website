export default function BrandMark({ className = '' }) {
  return (
    <img
      className={`brand-mark ${className}`.trim()}
      src="/conzaura-mark.png"
      alt=""
      aria-hidden="true"
    />
  );
}
