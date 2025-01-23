import styles from "./page.module.css";
import ProjectShowcase from "../../../components/ProjectShowcase/ProjectShowcase";
import ProjectShowcaseHeader from "../../../components/ProjectShowcase/ProjectShowcaseHeader/ProjectShowcaseHeader";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectShowcase videoUrl={"/videos/dental-website.mp4"} />
        <ProjectShowcaseHeader
          headerText={"Dental Clinic Website For a Client"}
          showLinkIcon
          siteLink={"https://pearlywhitesahmedabad.com/"}
        />
        <div className={styles.wrapperContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.skillPills}>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/wordpress.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Wordpress</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/generate-press.webp"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Generate Press</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/seo.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>SEO</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/google-business.webp"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Google Business</div>
              </div>
            </div>
            <div className={styles.projectIntro}>
              <p>
                I designed and developed a professional website for a dental
                clinic, focusing on user-friendly navigation and responsive
                design. The website includes the following key features:
              </p>
            </div>
            <div className={styles.projectKeySection}>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>1. Book Appointment Feature:</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Patients can seamlessly schedule appointments online,
                      ensuring convenience and efficiency.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>2. Services Overview</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A dedicated section to showcase the clinic's services with
                      detailed descriptions, helping patients understand the
                      treatments offered.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>3. Testimonials</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A testimonials section highlighting positive feedback from
                      satisfied patients, building trust and credibility.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>4. Work Showcase</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A visually appealing gallery displaying the clinic's work,
                      such as before-and-after images, to demonstrate expertise.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>5. SEO Optimization</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Implemented search engine optimization strategies,
                      including keyword research, meta tags, and content
                      optimization, to improve visibility in search results.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>6. Google Business Profile Integration:</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Optimized and linked the clinic’s Google Business Profile
                      to the website, enhancing local search rankings and
                      increasing organic traffic.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.purposeContainer}>
              <h2 className={styles.purposeHeader}>Purpose and Benefits</h2>
              <img
                src="/dental-clinic-analytics.png"
                alt="Pritul's Profile"
                className={styles.analyticsImage}
              />
              <p className={styles.benefitsText}>
                Implementing SEO and optimizing the Google Business Profile
                significantly increased the dental clinic's online visibility,
                resulting in a steady flow of new users to the website. These
                efforts enhanced local search rankings, driving more organic
                traffic and making it easy for nearby patients to discover the
                clinic through Google searches and Maps. Positive reviews and a
                professional online presence built trust, while clear
                calls-to-action like "Book Appointment" boosted engagement and
                appointment bookings, ultimately improving the clinic’s growth
                and patient outreach.
              </p>
            </div>
            <div className={styles.footerContainer}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
