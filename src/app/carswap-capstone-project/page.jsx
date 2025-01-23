import styles from "./page.module.css";
import ProjectShowcase from "../../../components/ProjectShowcase/ProjectShowcase";
import ProjectShowcaseHeader from "../../../components/ProjectShowcase/ProjectShowcaseHeader/ProjectShowcaseHeader";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectShowcase videoUrl={"/videos/carswap.mp4"} />
        <ProjectShowcaseHeader
          headerText={"Carswap Capstone Project"}
          showLinkIcon
          showGithubIcon
          siteLink={"https://legendary-souffle-c422b5.netlify.app/"}
          githubLink={"https://github.com/pritulgohil/pritul-carswap"}
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
                CarSwap is an online car marketplace developed as my capstone
                project using HTML, CSS, and JavaScript. The platform allows
                users to browse a variety of car listings, with the ability to
                sort and filter cars based on key attributes such as price,
                make, model, and year. The project focuses on delivering a
                user-friendly and responsive experience, enabling users to
                easily navigate through car options and find their desired
                vehicles quickly. By demonstrating my ability to build an
                interactive marketplace, CarSwap highlights my skills in
                front-end development, user interface design, and implementing
                sorting and filtering functionality.
              </p>
            </div>
            <div className={styles.projectKeySection}>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>1. Car Listings</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Users can view a variety of car listings with essential
                      details such as make, model, year, price, and condition.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>2. Sorting Functionality</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Allows users to sort the car listings based on various
                      criteria such as price, year, or make, providing a
                      customized browsing experience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>3. Filtering Options</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Enables users to filter car listings by multiple
                      attributes, such as price range, brand, year, and more,
                      making it easy to find specific cars.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>4. Responsive Design</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      The website is designed to be fully responsive, ensuring a
                      seamless experience across desktop, tablet, and mobile
                      devices.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>5. User-Friendly Interface</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A clean, intuitive interface that enhances the user
                      experience, making it simple for visitors to navigate the
                      marketplace and interact with the car listings.
                    </li>
                  </ul>
                </div>
              </div>
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
