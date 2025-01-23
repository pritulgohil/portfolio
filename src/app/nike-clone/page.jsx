import styles from "./page.module.css";
import ProjectShowcase from "../../../components/ProjectShowcase/ProjectShowcase";
import ProjectShowcaseHeader from "../../../components/ProjectShowcase/ProjectShowcaseHeader/ProjectShowcaseHeader";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectShowcase videoUrl={"/videos/nike-clone.mp4"} />
        <ProjectShowcaseHeader
          headerText={"Nike Website Clone"}
          showLinkIcon
          showGithubIcon
          siteLink={"https://nike-ca-clone.netlify.app/"}
          githubLink={"https://github.com/pritulgohil/nike-clone"}
        />
        <div className={styles.wrapperContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.skillPills}>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/html.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>HTML</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/css.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>CSS</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/javascript.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>JavaScript</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/firebase.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Firebase</div>
              </div>
            </div>
            <div className={styles.projectIntro}>
              <p>
                I developed a fully responsive Nike website clone using HTML,
                CSS, JavaScript, and integrated Firebase for enhanced
                functionality. The project replicates the look and feel of the
                Nike website, featuring product listings, a dynamic shopping
                cart, and interactive elements such as hover effects and image
                sliders. Firebase was used for user authentication, enabling
                secure sign-ins and account management, as well as file storage
                to manage product images and other media. The clone also
                utilizes Firebase’s real-time database to store and retrieve
                user data, providing a seamless, interactive shopping experience
                while ensuring secure and efficient data handling.
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
                      A visually appealing and responsive homepage that mimics
                      the design and layout of the original Nike website,
                      featuring promotional banners, product highlights, and
                      calls-to-action.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>2. Product Listing</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A dynamic product listing page that displays various Nike
                      products with detailed information, including prices,
                      descriptions, and available sizes.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>3. Product Image Gallery</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      An interactive image gallery for each product, showcasing
                      multiple product images with zoom functionality and
                      carousel navigation to enhance the shopping experience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>4. Sign In / Sign Up</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      User authentication via Firebase, allowing customers to
                      securely sign in or create an account to save personal
                      information, track orders, and manage preferences.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.purposeContainer}>
              <h2 className={styles.purposeHeader}>Purpose and Benefits</h2>
              <p className={styles.benefitsText}>
                The purpose of creating the Nike website clone was to
                demonstrate and enhance my front-end development skills by
                replicating a modern, responsive e-commerce site. Utilizing
                HTML, CSS, JavaScript, and Firebase, I was able to implement key
                features such as a dynamic product listing, an interactive
                product image gallery, and user authentication for secure
                sign-ins and data storage. The benefits of this project include
                not only a deeper understanding of web design and development
                but also the ability to integrate real-time databases and secure
                user authentication, showcasing my ability to build fully
                functional, user-friendly websites with modern technologies.
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
