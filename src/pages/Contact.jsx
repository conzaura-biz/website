import { useState } from 'react';
import BrandMark from '../components/BrandMark';
import PageMeta from '../components/PageMeta';
import Icon from '../components/Icon';
import Button from '../components/Button';
import FinalCTA from '../components/FinalCTA';
import { useSearchParams } from 'react-router-dom';
import { validateContact } from '../utils/validation';

export default function Contact() {
  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get('service');

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: selectedService
      ? `I would like to know more about ${selectedService}.`
      : '',
  });

  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: '',
    }));

    setDone(false);
  };

  const submit = (event) => {
    event.preventDefault();

    const nextErrors = validateContact(form);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      return;
    }

    setDone(true);
  };

  return (
    <>
      <PageMeta
        title="Contact Us | Conzaura"
        description="Reach out to Conzaura for business registration and consultation guidance."
      />

      {/* =====================================================
          YELLOW CONTACT HERO
          ===================================================== */}

      <section className="contact-hero-reference">

        <div className="contact-hero-inner">

          <div className="contact-hero-eyebrow">
            <BrandMark />

            <span>
              CONTACT CONZAURA
            </span>
          </div>

          <h1>
            Reach out to us
          </h1>

          <div className="contact-hero-arrow">
            ↓
          </div>

        </div>

      </section>


      {/* =====================================================
          BREADCRUMB
          ===================================================== */}

      <div className="contact-breadcrumb">

        <div className="contact-breadcrumb-inner">

          <span>Home</span>

          <span>/</span>

          <strong>Contact Us</strong>

        </div>

      </div>


      {/* =====================================================
          CONTACT CONTENT
          ===================================================== */}

      <section className="contact-reference-section">

        <div className="contact-reference-container">


          {/* =================================================
              LEFT SIDE
              HEADING + FORM
              ================================================= */}

          <div className="contact-reference-left">

            <h2 className="contact-reference-title">
              Let’s Start Your
              <br />
              <em>Business Journey</em>
            </h2>



            <form
              className="contact-reference-form"
              onSubmit={submit}
              noValidate
            >

              {/* FULL NAME */}
              <div className="reference-field">

                <label htmlFor="contact-name">
                  FULL NAME
                </label>

                <span className="reference-required">
                  *
                </span>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={update}
                  autoComplete="name"
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                />

                {errors.name && (
                  <small>
                    {errors.name}
                  </small>
                )}

              </div>


              {/* EMAIL */}
              <div className="reference-field">

                <label htmlFor="contact-email">
                  EMAIL ADDRESS
                </label>

                <span className="reference-required">
                  *
                </span>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />

                {errors.email && (
                  <small>
                    {errors.email}
                  </small>
                )}

              </div>


              {/* MESSAGE */}
              <div className="reference-field reference-message">

                <label htmlFor="contact-message">
                  MESSAGES
                </label>

                <span className="reference-required">
                  *
                </span>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows="7"
                  placeholder="How can we help you?"
                  aria-invalid={Boolean(errors.message)}
                />

                {errors.message && (
                  <small>
                    {errors.message}
                  </small>
                )}

              </div>


              <Button type="submit">
                Submit
              </Button>


              {done && (
                <div
                  className="contact-reference-success"
                  role="status"
                >
                  Thanks. Your message is validated and ready to
                  connect to your API.
                </div>
              )}

            </form>

          </div>


          {/* =================================================
              RIGHT SIDE
              COMPANY INFORMATION
              ================================================= */}

          <div className="contact-reference-right">


            {/* EMAIL */}

            <div className="reference-company-item">

              <div className="reference-company-icon">
                <Icon name="mail" size={28} />
              </div>

              <div>

                <span className="reference-company-label">
                  EMAIL
                </span>

                <a
                  href="mailto:info@gmail.com"
                  className="reference-company-value"
                >
                  info@gmail.com
                </a>

              </div>

            </div>


            {/* PHONE */}

            <div className="reference-company-item">

              <div className="reference-company-icon">
                <Icon name="phone" size={28} />
              </div>

              <div>

                <span className="reference-company-label">
                  PHONE
                </span>

                <a
                  href="tel:+911234567890"
                  className="reference-company-value"
                >
                  +91 (123) 456-7890
                </a>

              </div>

            </div>


            {/* OFFICE */}

            <div className="reference-company-item">

              <div className="reference-company-icon">
                <Icon name="pin" size={28} />
              </div>

              <div>

                <span className="reference-company-label">
                  OFFICE
                </span>

                <span className="reference-company-value">
                  Unknown Area, India
                </span>

              </div>

            </div>


            {/* FOLLOW */}

            <div className="reference-follow">

              <span className="reference-follow-title">
                FOLLOW US
              </span>

              <div className="reference-socials">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                >
                  𝕏
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


    </>
  );
}
