import styles from "./Project.module.css";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.sectionHeader}>
          <h3>Projects</h3>
        </div>
        <div className={styles.projectCards}>
          <Link href="/patient-dashboard" className={styles.link}>
            <div className={styles.projectCard}>
              <div className={styles.projectScreenshotContainer}>
                <img
                  src="/patient-dashboard.png"
                  alt="Pritul's Profile"
                  className={styles.projectScreenshot}
                />
              </div>
              <div className={styles.projectCardHeader}>
                <h4>Patient Dashboard Overview</h4>
              </div>
              <div className={styles.techStack}>
                <span className={styles.techPill}>NextJs</span>
                <span className={styles.techPill}>Tailwind</span>
              </div>
              <div className={styles.projectCardDetails}>
                <p>
                  I built a patient dashboard with Next.js, allowing users to
                  manage appointments, invoices, and health data in a secure,
                  user-friendly interface.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/dental-website" className={styles.link}>
            <div className={styles.projectCard}>
              <div className={styles.projectScreenshotContainer}>
                <img
                  src="/client-dental.png"
                  alt="Pritul's Profile"
                  className={styles.projectScreenshot}
                />
              </div>
              <div className={styles.projectCardHeader}>
                <h4>Dental Clinic Website For a Client</h4>
              </div>
              <div className={styles.techStack}>
                <span className={styles.techPill}>Wordpress</span>
                <span className={styles.techPill}>SEO</span>
                <span className={styles.techPill}>Generate Press Pro</span>
                <span className={styles.techPill}>Google Business</span>
              </div>
              <div className={styles.projectCardDetails}>
                <p>
                  Client's dental clinic website using WordPress, showcasing
                  essential information and providing an easy-to-navigate,
                  responsive design.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/seo-optimization" className={styles.link}>
            <div className={styles.projectCard}>
              <div className={styles.projectScreenshotContainer}>
                <img
                  src="/laptop-under-budget.png"
                  alt="Pritul's Profile"
                  className={styles.projectScreenshot}
                />
              </div>
              <div className={styles.projectCardHeader}>
                <h4>
                  SEO Optimization for Amazon Affiliate Website: Boosting Sales
                  and Traffic
                </h4>
              </div>
              <div className={styles.techStack}>
                <span className={styles.techPill}>Wordpress</span>
                <span className={styles.techPill}>SEO</span>
                <span className={styles.techPill}>Ahrefs</span>
                <span className={styles.techPill}>Semrush</span>
              </div>
              <div className={styles.projectCardDetails}>
                <p>
                  I implemented SEO strategies for an Amazon affiliate website,
                  focusing on keyword research, on-page optimization, and
                  backlink building to improve search engine rankings. These
                  efforts resulted higher organic traffic.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/tailorshop-website" className={styles.link}>
            <div className={styles.projectCard}>
              <div className={styles.projectScreenshotContainer}>
                <img
                  src="/modern-tailor-landing.png"
                  alt="Pritul's Profile"
                  className={styles.projectScreenshot}
                />
              </div>
              <div className={styles.projectCardHeader}>
                <h4>Tailorshop Wesbite For a Client</h4>
              </div>
              <div className={styles.techStack}>
                <span className={styles.techPill}>NextJs</span>
                <span className={styles.techPill}>Tailwind</span>
                <span className={styles.techPill}>Aceternity UI</span>
                <span className={styles.techPill}>MongoDB</span>
                <span className={styles.techPill}>JWT Auth</span>
              </div>
              <div className={styles.projectCardDetails}>
                <p>
                  Development of Landing Page and Appointment Booking System
                  with Secure User Authentication (JWT) for Tailor Shop,
                  Enhancing User Experience and Streamlining Bookings
                </p>
              </div>
            </div>
          </Link>
          <Link href="/nike-clone" className={styles.link}>
            <div className={styles.projectCard}>
              <div className={styles.projectScreenshotContainer}>
                <img
                  src="/nike-clone.png"
                  alt="Pritul's Profile"
                  className={styles.projectScreenshot}
                />
              </div>
              <div className={styles.projectCardHeader}>
                <h4>Nike Website Clone</h4>
              </div>
              <div className={styles.techStack}>
                <span className={styles.techPill}>HTML</span>
                <span className={styles.techPill}>CSS</span>
                <span className={styles.techPill}>JavaScript</span>
                <span className={styles.techPill}>Firebase</span>
              </div>
              <div className={styles.projectCardDetails}>
                <p>
                  I developed a Nike website clone featuring product listings, a
                  shopping cart, and user authentication, delivering a seamless
                  and responsive shopping experience across devices.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/css-unit-converter" className={styles.link}>
            <div className={styles.projectCard}>
              <div className={styles.projectScreenshotContainer}>
                <img
                  src="/css-unit.png"
                  alt="Pritul's Profile"
                  className={styles.projectScreenshot}
                />
              </div>
              <div className={styles.projectCardHeader}>
                <h4>CSS Unit Converter Tool</h4>
              </div>
              <div className={styles.techStack}>
                <span className={styles.techPill}>HTML</span>
                <span className={styles.techPill}>Bulma CSS Framework</span>
                <span className={styles.techPill}>JavaScript</span>
                <span className={styles.techPill}>SEO</span>
                <span className={styles.techPill}>Adsense</span>
              </div>
              <div className={styles.projectCardDetails}>
                <p>
                  I developed a CSS unit converter tool, optimized it for search
                  engines, and successfully generated ad revenue through Google
                  AdSense by driving targeted traffic and improving site
                  visibility.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/carswap-capstone-project" className={styles.link}>
            <div className={styles.projectCard}>
              <div className={styles.projectScreenshotContainer}>
                <img
                  src="/carswap.png"
                  alt="Pritul's Profile"
                  className={styles.projectScreenshot}
                />
              </div>
              <div className={styles.projectCardHeader}>
                <h4>CarSwap Capstone Project</h4>
              </div>
              <div className={styles.techStack}>
                <span className={styles.techPill}>HTML</span>
                <span className={styles.techPill}>Bootstrap</span>
                <span className={styles.techPill}>JavaScript</span>
                <span className={styles.techPill}>Firebase</span>
              </div>
              <div className={styles.projectCardDetails}>
                <p>
                  I built CarSwap, an online car marketplace featuring car
                  listings, user authentication, and a responsive, user-friendly
                  interface for seamless car buying, selling, and swapping
                  experiences.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/miscellaneous-projects" className={styles.link}>
            <div className={styles.projectCard}>
              <div className={styles.projectScreenshotContainer}>
                <img
                  src="/huddle.png"
                  alt="Pritul's Profile"
                  className={styles.projectScreenshot}
                />
              </div>
              <div className={styles.projectCardHeader}>
                <h4>Miscellaneous Projects</h4>
              </div>
              <div className={styles.techStack}>
                <span className={styles.techPill}>HTML</span>
                <span className={styles.techPill}>CSS</span>
                <span className={styles.techPill}>JavaScript</span>
              </div>
              <div className={styles.projectCardDetails}>
                <p>
                  I’ve built various projects showcasing my front-end skills,
                  including responsive designs, interactive web apps, and custom
                  UI components using modern web technologies.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
