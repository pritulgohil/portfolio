import styles from "./page.module.css";
import ProjectShowcase from "../../../components/ProjectShowcase/ProjectShowcase";
import ProjectShowcaseHeader from "../../../components/ProjectShowcase/ProjectShowcaseHeader/ProjectShowcaseHeader";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectShowcase videoUrl={"/videos/tailorshop-website.mp4"} />
        <ProjectShowcaseHeader
          headerText={"Tailorshop Wesbite For a Client"}
          showLinkIcon
          showGithubIcon
          siteLink={"https://modern-tailor.vercel.app/"}
          githubLink={"https://github.com/pritulgohil/modern-tailor-next"}
        />
        <div className={styles.wrapperContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.skillPills}>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/nextjs.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>NextJs</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/tailwind.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Tailwind</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/aceternity-ui.avif"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Aceternity UI</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/mongodb.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>MongoDB</div>
              </div>
            </div>
            <div className={styles.projectIntro}>
              <p>
                I am currently developing a custom website for a tailor shop
                using Next.js and MongoDB. The website will feature a dynamic
                landing page to engage visitors, a video section showcasing the
                shop's services, and an Our Work section highlighting the
                tailor’s craftsmanship through high-quality images.
                Additionally, the site will include user authentication for
                secure access to personalized features and an appointment
                booking system that allows customers to easily schedule
                appointments online. MongoDB is being used to manage user data
                and appointments, ensuring a reliable backend for a seamless
                user experience. This project is still in its development stage,
                with new features and optimizations being added to improve
                overall functionality.
              </p>
            </div>
            <div className={styles.projectKeySection}>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>1. Landing Page</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A visually engaging introduction to the tailor shop,
                      highlighting the business’s unique value proposition and
                      services.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>2. Video Section</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A dedicated area to showcase promotional videos,
                      behind-the-scenes footage, or a demonstration of the
                      tailor shop's offerings and expertise.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>3. Our Work Section</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A gallery or portfolio showcasing high-quality images of
                      the tailor’s craftsmanship, previous work, and satisfied
                      customers.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>4. User Authentication</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A secure login or sign-up feature that allows customers to
                      access personalized services, such as order tracking or
                      appointment history.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>5. Appointment Booking System</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      An easy-to-use interface for customers to book
                      appointments online, with features like available time
                      slots, date selection, and confirmation.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>6. Backend (MongoDB):</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A robust database powered by MongoDB to manage user data,
                      appointments, and other essential information securely and
                      efficiently.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.purposeContainer}>
              <h2 className={styles.purposeHeader}>Purpose and Benefits</h2>
              <p className={styles.benefitsText}>
                The purpose of developing the Tailor Shop website is to provide
                a seamless online experience for customers, offering key
                features such as a captivating landing page, engaging video
                section, and a portfolio of Our Work to showcase the tailor’s
                expertise. The integration of user authentication and an
                appointment booking system ensures secure, personalized
                interactions, while MongoDB serves as the reliable backend to
                manage data efficiently. The benefits include enhanced user
                engagement, increased customer convenience with online booking,
                and a professional, easily navigable platform that strengthens
                the tailor shop’s online presence, ultimately driving more
                business and improving customer satisfaction.
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
