import SectionTitle from '../components/SectionTitle';
import BrandMark from '../components/BrandMark';
import PageMeta from '../components/PageMeta';
import Stats from '../components/Stats';
import FinalCTA from '../components/FinalCTA';
import Icon from '../components/Icon';
import asset from '../utils/asset';

const values = [
  [
    'Clarity',
    'We make complex registration requirements simple and easy to understand.'
  ],
  [
    'Trust',
    'We build confidence through transparent communication and dependable support.'
  ],
  [
    'Simplicity',
    'We create a straightforward process without unnecessary complexity.'
  ],
  [
    'Client First',
    'We put your business needs at the centre of every interaction.'
  ],
];

export default function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          PAGE META
      ===================================================== */}

      <PageMeta
        title="About Us | Conzaura"
        description="Get to know Conzaura and our approach to simpler, clearer business registration support."
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="inner-hero about-hero">

        <div className="container inner-hero-content">

          <div className="eyebrow">
            <BrandMark />
            <span>WHO WE ARE</span>
          </div>

          <h1>Get to Know us</h1>

          <div className="inner-hero-arrow" aria-hidden="true">↓</div>

        </div>

        <div className="breadcrumb">

          <div className="container">

            <span>Home</span>

            <span>/</span>

            <strong>About Us</strong>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT CONZAURA
      ===================================================== */}

      <section className="section about-intro">

        <div className="container">

          <div className="about-lead">

            <div className="eyebrow">

              <BrandMark />

              <span>ABOUT CONZAURA</span>

            </div>

            <p>
              We make business registration simpler and clearer, providing
              expert guidance that helps entrepreneurs choose the right
              structure, navigate requirements, and complete the process
              with confidence, so they can focus on building and growing
              their business.
            </p>

          </div>


          <Stats />

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="story-section">

        <div className="container story-visual">


          {/* LEFT / TOP IMAGE */}

          <img
            className="story-photo story-photo-left"
            src={asset('/images/about-team-top.jpg')}
            alt="Business professionals"
            loading="lazy"
          />


          {/* CENTER CONTENT */}

          <div className="story-inner">

            <div className="story-badge">

              <BrandMark />

              <span>OUR STORY</span>

            </div>


            <p className="story-description">

              <span>CONZAURA</span> was created to make business registration
              simpler for entrepreneurs. We combine clear guidance, practical
              support, and a straightforward process to help businesses choose
              the right structure, complete their registration, and move
              forward with confidence.

            </p>


            <div
              className="story-orb"
              aria-hidden="true"
            >
              ↓
            </div>

          </div>


          {/* RIGHT / BOTTOM IMAGE */}

          <img
            className="story-photo story-photo-right"
            src={asset('/images/about-team-bottom.jpg')}
            alt="Business professionals collaborating"
            loading="lazy"
          />

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}

      <section className="section values-section">

        <div className="container">


          <SectionTitle
            eyebrow="OUR VALUES"
            title="What We <em>Stand For</em>"
            description="Our values shape how we work, communicate, and support every business throughout its registration journey."
          />


          <div className="values-grid">

  {values.map(([title, description]) => (

    <article key={title}>

      <span className="value-symbol" aria-hidden="true">
        <img src={asset('/images/icons/values-icon.png')} alt="" className="value-icon-img" />
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

    </article>

  ))}

</div>

        </div>

      </section>


      {/* =====================================================
          BUILT FOR YOUR BUSINESS
      ===================================================== */}

      <section className="built-section">

        <div className="container">


          <SectionTitle
            eyebrow="BUILT FOR YOUR BUSINESS"
            title="Clear Guidance That Makes Business<br/><em>Registration Simple</em>"
            description="From choosing the right structure to completing your registration, Conzaura helps you move forward with clarity and confidence."
          />


          {/* =================================================
              BUILT STATS

              Reference design:
              - No individual boxes
              - No vertical dividers
              - One top horizontal line
              - One bottom horizontal line
              - Four equal statistics
          ================================================= */}

          <div className="built-stats">

            <div className="built-stat">

              <strong>500+</strong>

              <span>
                Businesses Assisted
              </span>

            </div>


            <div className="built-stat">

              <strong>4.9/5</strong>

              <span>
                Client Rating
              </span>

            </div>


            <div className="built-stat">

              <strong>48 hrs</strong>

              <span>
                Average Response Time
              </span>

            </div>


            <div className="built-stat">

              <strong>100%</strong>

              <span>
                Confidential Support
              </span>

            </div>

          </div>

        </div>

      </section>


    </main>
  );
}