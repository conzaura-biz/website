import { useRef, useState } from 'react';
import BrandMark from '../components/BrandMark';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageMeta from '../components/PageMeta';
import SectionTitle from '../components/SectionTitle';
import ServiceCategory from '../components/ServiceCategory';
import ProcessSteps from '../components/ProcessSteps';
import TestimonialCard from '../components/TestimonialCard';
import FAQ from '../components/FAQ';
import ConsultationForm from '../components/ConsultationForm';
import FinalCTA from '../components/FinalCTA';
import Icon from '../components/Icon';
import asset from '../utils/asset';

import { serviceCategories } from '../data/services';
import { testimonials } from '../data/testimonials';
import { faqItems } from '../data/faq';


const trustAvatars = [
  asset('/avatars/trust-1.png'),
  asset('/avatars/trust-2.png'),
  asset('/avatars/trust-3.png'),
  asset('/avatars/trust-4.png'),
  asset('/avatars/laura.png')
];


export default function Home() {

  const [showAllServices, setShowAllServices] = useState(false);

  /* =====================================================
     SHOW ALL SERVICES
     ===================================================== */

  const revealServices = () => {

    setShowAllServices(true);

    window.setTimeout(() => {

      document
        .getElementById('services-preview')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

    }, 30);
  };


  return (

    <main className="home-page">

      {/* =================================================
          PAGE META
          ================================================= */}

      <PageMeta
        title="Conzaura | Business Registration & Consultation"
        description="Start your business with confidence with expert business registration and consultation support from Conzaura."
      />


      {/* =================================================
          HERO
          ================================================= */}

      <section
        className="hero"
        aria-labelledby="hero-title"
      >

        <div className="container hero-content">

          <div className="eyebrow">

            <BrandMark />

            <span>
              BUSINESS REGISTRATION &amp; CONSULTATION
            </span>

          </div>


          <h1 id="hero-title">

            Start Your Business
            <br />

            With <em>Confidence</em>

          </h1>


          <p>
            Get expert guidance for registering your business,
            without the complexity.
          </p>


          <div className="hero-actions">

            <Button to="/contact" variant="light" icon={false} className="hero-consult-btn">
              Get Free Consultation
            </Button>

            <Button
              onClick={revealServices}
              variant="dark"
              icon="dotted"
              iconPosition="left"
              className="hero-explore-btn"
            >
              Explore Services
            </Button>

          </div>


          <div className="trust-row">

            <div
              className="mini-avatars"
              aria-hidden="true"
            >

              {trustAvatars.map((src, index) => (

                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt=""
                  loading="eager"
                />

              ))}

            </div>


            <span>
              Trusted guidance for business registration
            </span>

          </div>

        </div>


        <div className="hero-visual-wrap">

          <img
            className="hero-smart-image"
            src={asset('/images/smart-solutions.jpg')}
            alt="Smart Solutions. Stronger Business. Conzaura business consultation."
          />

        </div>

      </section>


      {/* =================================================
          SERVICES
          ================================================= */}

      <section
        id="services-preview"
        className="section services-preview"
      >

        <div className="container">

          <SectionTitle
            eyebrow="OUR SERVICES"
            title={'Business Registration,<br/><em>Simplified</em> for You'}
            description="Choose the right business structure and let our experts handle the rest, so you can focus on building your dream."
          />


          <div className="service-grid featured">

            {(showAllServices
              ? serviceCategories
              : serviceCategories.slice(0, 3)
            ).map((category) => (

              <ServiceCategory
                category={category}
                key={category.title}
              />

            ))}

          </div>


          <div className="center-action">

            {!showAllServices ? (

              <Button
                onClick={revealServices}
                icon="dotted"
                iconPosition="left"
                className="explore-all-btn"
              >
                EXPLORE ALL SERVICES
              </Button>

            ) : (

              <button
                type="button"
                className="text-button"
                onClick={() => setShowAllServices(false)}
              >

                Hide Additional Services

                <span aria-hidden="true">
                  ↑
                </span>

              </button>

            )}

          </div>

        </div>

      </section>


      {/* =================================================
          WHY CONZAURA
          ================================================= */}

      <section className="why-section">

        <div className="container why-grid">

          <div className="why-left">

            <SectionTitle
              eyebrow="WHY CONZAURA"
              align="left"
              title={'Why Choose<br/><em>Conzaura</em> for<br/>Business'}
            />


            <div className="why-image">

              <img
                src={asset('/images/why-choose-person.png')}
                alt="Business professional working on a laptop"
                loading="lazy"
              />

            </div>

          </div>


          <div className="why-items">

            <article>

              <div className="why-icon" aria-hidden="true">
                <img src={asset('/images/icons/why/simple-process.png')} alt="" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'block'; }} />
                <span style={{ display: 'none' }}><Icon name="process" size={43} /></span>
              </div>

              <h3>
                Simple Process
              </h3>

              <p>
                Clear, step-by-step guidance to make your
                registration process easier.
              </p>

            </article>


            <article>

              <div className="why-icon" aria-hidden="true">
                <img src={asset('/images/icons/why/expert-guidance.png')} alt="" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'block'; }} />
                <span style={{ display: 'none' }}><Icon name="user" size={43} /></span>
              </div>

              <h3>
                Expert Guidance
              </h3>

              <p>
                Get professional support to help you choose
                and complete the right registration.
              </p>

            </article>


            <article>

              <div className="why-icon" aria-hidden="true">
                <img src={asset('/images/icons/why/transparent-support.png')} alt="" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'block'; }} />
                <span style={{ display: 'none' }}><Icon name="handshake" size={43} /></span>
              </div>

              <h3>
                Transparent Support
              </h3>

              <p>
                Know what to expect at every stage, with
                clear communication throughout.
              </p>

            </article>


            <article>

              <div className="why-icon" aria-hidden="true">
                <img src={asset('/images/icons/why/end-to-end-assistance.png')} alt="" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'block'; }} />
                <span style={{ display: 'none' }}><Icon name="shield" size={43} /></span>
              </div>

              <h3>
                End-to-End Assistance
              </h3>

              <p>
                From initial consultation to registration,
                get support throughout your journey.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =================================================
          PROCESS
          ================================================= */}

      <section className="process-section">
        <ProcessSteps />
      </section>


      {/* =================================================
          TESTIMONIALS
          ================================================= */}

      <section className="section testimonials-section">

        <div className="container testimonials-layout">

          <div className="testimonials-heading">

            <SectionTitle
              align="left"
              title={'Real <em>feedback,</em><br/>real results'}
              description="Hear from businesses and professionals who’ve accelerated growth with our expertise"
            />

          </div>


          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((item) => (
              <TestimonialCard
                item={item}
                key={item.name}
              />
            ))}
          </div>

        </div>

      </section>


      {/* =================================================
          FAQ
          ================================================= */}

      <section className="section faq-section">

        <div className="container faq-grid">

          <div>

            <SectionTitle
              eyebrow="FAQ"
              align="left"
              title={'Have <em>questions?</em> Find answers.'}
            />


            <p className="faq-side-copy">
              <strong>Have more questions?</strong><br />
              Reach out to our friendly support team.
            </p>


            <Button
              to="/contact"
              variant="light"
              iconPosition="left"
              className="talk-sales-btn"
            >
              Talk to Sales
            </Button>

          </div>


          <FAQ items={faqItems} />

        </div>

      </section>


      {/* =================================================
          CONSULTATION
          ================================================= */}

      <section
        id="consultation"
        className="consultation-section"
      >

        <div className="container consultation-grid">

          <div className="consultation-copy">

            <h2>
              Ready to Start Your
              <br />
              Business?
            </h2>


            <p>
              Fill out the form below, and our team will get
              in touch to understand your requirements and
              arrange a consultation.
            </p>

          </div>


          <ConsultationForm />

        </div>

      </section>


      

    </main>
  );
}
