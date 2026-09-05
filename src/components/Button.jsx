import { Link } from 'react-router-dom';
import Icon from './Icon';
import asset from '../utils/asset';

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'dark',
  onClick,
  className = '',
  icon = true,
  iconPosition = 'right',
  disabled = false,
  target,
}) {
  const classes = `btn btn-${variant} ${iconPosition === 'left' ? 'btn-icon-left' : ''} ${className}`.trim();
  const arrow = icon ? (
    <span className="btn-icon" aria-hidden="true">
      {icon === 'dotted' ? (
        <img src={asset('/dotted-arrow.png')} alt="" style={{ height: '11px' }} />
      ) : (
        <Icon name="arrow" size={14} />
      )}
    </span>
  ) : null;

  const content = (
    <>
      {iconPosition === 'left' && arrow}
      <span>{children}</span>
      {iconPosition !== 'left' && arrow}
    </>
  );

  if (to) {
    return <Link className={classes} to={to} onClick={onClick} aria-disabled={disabled || undefined}>{content}</Link>;
  }
  if (href) {
    return <a className={classes} href={href} onClick={onClick} target={target}>{content}</a>;
  }
  return <button className={classes} type={type} onClick={onClick} disabled={disabled}>{content}</button>;
}
