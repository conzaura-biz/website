import { useEffect, useRef, useState } from 'react';
import { validateConsultation } from '../utils/validation';
import Icon from './Icon';

const initial = { name: '', company: '', phone: '', email: '', message: '' };
const TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || TEST_SITE_KEY;

function loadRecaptcha() {
  return new Promise((resolve, reject) => {
    if (window.grecaptcha?.render) {
      resolve(window.grecaptcha);
      return;
    }

    // Set up global callback
    window.onConzauraRecaptchaLoad = () => {
      resolve(window.grecaptcha);
    };

    const existing = document.querySelector('script[data-conzaura-recaptcha]');
    if (existing) {
      existing.addEventListener('error', reject, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit&onload=onConzauraRecaptchaLoad';
    script.async = true;
    script.defer = true;
    script.dataset.conzauraRecaptcha = 'true';
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function ConsultationForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaReady, setCaptchaReady] = useState(false);
  const captchaRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || !captchaRef.current || widgetIdRef.current !== null) return;
        widgetIdRef.current = grecaptcha.render(captchaRef.current, {
          sitekey: SITE_KEY,
          theme: 'light',
          callback: (token) => setCaptchaToken(token || ''),
          'expired-callback': () => setCaptchaToken(''),
          'error-callback': () => setCaptchaToken(''),
        });
        setCaptchaReady(true);
      })
      .catch(() => {
        if (!cancelled) setCaptchaReady(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  };

  const submit = async (event) => {
    event.preventDefault();
    setSubmitted(false);

    const nextErrors = validateConsultation(form);
    if (!captchaToken) nextErrors.captcha = 'Please complete the reCAPTCHA check.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    try {
      // Replace this simulated response with your future POST /api/consultations call.
      await new Promise((resolve) => setTimeout(resolve, 400));
      setSubmitted(true);
      setForm(initial);
      setCaptchaToken('');
      if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
    } finally {
      setLoading(false);
    }
  };

  const field = (name, label, placeholder, type = 'text', required = true) => (
    <label className="field" htmlFor={`consult-${name}`}>
      <span>{label}{required && <b aria-hidden="true">*</b>}</span>
      <input id={`consult-${name}`} name={name} type={type} value={form[name]} onChange={update} placeholder={placeholder} aria-invalid={Boolean(errors[name])} />
      {errors[name] && <small>{errors[name]}</small>}
    </label>
  );

  return (
    <form className="consultation-form" onSubmit={submit} noValidate>
      <p className="form-lead">Fill out the form below, and our team will get in touch to understand your requirements and arrange a consultation.</p>
      <div className="form-grid">
        {field('name', 'Your Name', 'Enter Name')}
        {field('company', 'Company Name', 'Company Name (Optional)', 'text', false)}
        {field('phone', 'Phone Number', 'Enter Number', 'tel')}
        {field('email', 'Email Address', 'Enter Email', 'email')}
      </div>
      <label className="field" htmlFor="consult-message">
        <span>Tell us about yourself and your business<b aria-hidden="true">*</b></span>
        <textarea id="consult-message" name="message" value={form.message} onChange={update} placeholder="Please let us know about you and your business" rows="5" aria-invalid={Boolean(errors.message)} />
        {errors.message && <small>{errors.message}</small>}
      </label>

      <div className={`captcha-wrap ${errors.captcha ? 'has-error' : ''}`}>
        <div ref={captchaRef} className="recaptcha-box" aria-label="reCAPTCHA" />
        {!captchaReady && <div className="captcha-loading">Loading security check…</div>}
        {errors.captcha && <small className="captcha-error">{errors.captcha}</small>}
      </div>

      <button className="form-submit" type="submit" disabled={loading}>
        <span>{loading ? 'Submitting…' : 'Submit Request'}</span>
        <span className="btn-icon" aria-hidden="true"><Icon name="arrow" size={16} /></span>
      </button>
      {submitted && <div className="form-success" role="status">Thanks. Your request passed validation and is ready for API delivery.</div>}
    </form>
  );
}
