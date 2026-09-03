export default function Icon({ name, size = 24, stroke = 'currentColor', strokeWidth = 1.8 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    building: <><path d="M4 21V5a2 2 0 0 1 2-2h9v18"/><path d="M15 9h5v12"/><path d="M8 7h3M8 11h3M8 15h3M18 13h1M18 17h1"/><path d="M2 21h20"/></>,
    copyright: <><circle cx="12" cy="12" r="9"/><path d="M15 9.5a4 4 0 1 0 0 5"/></>,
    audit: <><path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9"/><path d="M13 3l4 4M8 8h4M8 12h3"/><circle cx="17" cy="17" r="4"/><path d="M17 15.3v3.4M15.8 17h2.4"/></>,
    tax: <><path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9"/><path d="M13 3l4 4M8 8h4M8 12h3"/><circle cx="17" cy="17" r="4"/><path d="M15.4 18.6 18.6 15.4M15.7 16h.01M18 18h.01"/></>,
    gst: <><rect x="4" y="4" width="4" height="4" rx="1"/><rect x="10" y="4" width="4" height="4" rx="1"/><rect x="16" y="4" width="4" height="4" rx="1"/><rect x="4" y="10" width="4" height="4" rx="1"/><rect x="10" y="10" width="4" height="4" rx="1"/><rect x="16" y="10" width="4" height="4" rx="1"/><rect x="4" y="16" width="4" height="4" rx="1"/><rect x="10" y="16" width="4" height="4" rx="1"/><rect x="16" y="16" width="4" height="4" rx="1"/></>,
    license: <><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6M9 19h4"/><path d="m3 9 2 2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    process: <><path d="M4 7h13"/><path d="m14 4 3 3-3 3"/><path d="M20 17H7"/><path d="m10 14-3 3 3 3"/><circle cx="6" cy="7" r="2"/><circle cx="18" cy="17" r="2"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    phone: <><path d="M6.5 3.5 9 3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L16 13l5 2 .5 2.5A2 2 0 0 1 19.5 20C10.9 19.3 4.7 13.1 4 4.5A2 2 0 0 1 6.5 3.5Z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    handshake: <><path d="m3 11 4-4 5 3 5-3 4 4"/><path d="m7 7 3 3M17 7l-4 4"/><path d="m8 15 2 2 2-2 2 2 2-2"/></>,
    shield: <><path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z"/><path d="m8 12 2.5 2.5L16 9"/></>
  };
  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}
