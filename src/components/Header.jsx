import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../data/navigation';
import Icon from './Icon';
import Button from './Button';
import asset from '../utils/asset';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <>
      <div className="top-strip"><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Business registration, made simpler <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center' }}><img src={asset('/dotted-arrow.png')} alt="" style={{ height: '11px', marginLeft: '6px' }} /></span></div></div>
      <header className="site-header">
        <div className="container nav-inner">
          <Link to="/" className="brand" aria-label="Conzaura home" onClick={() => setOpen(false)}>
            <img src={asset('/logo.png')} alt="Conzaura" />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-cta-wrap">
            <Button to="/contact" variant="dark" icon={false} className="header-cta-btn">FREE CONSULTATION</Button>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={23} />
          </button>
        </div>

        <div id="mobile-navigation" className={`mobile-nav ${open ? 'open' : ''}`}>
          <div className="container mobile-nav-inner">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="dark" icon={false} className="header-cta-btn" onClick={() => setOpen(false)}>FREE CONSULTATION</Button>
          </div>
        </div>
      </header>
    </>
  );
}
