import styles from "./WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.experienceSection}>
          <div className={styles.experienceSectionHeader}>
            <h3>Work Experience</h3>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.experienceItemLeft}>
              <div className={styles.companyLogoContainer}>
                <img
                  src="/vosyn_logo.jpeg"
                  alt="Pritul's Profile"
                  className={styles.companyLogoImage}
                />
              </div>
              <div className={styles.companyDetails}>
                <div className={styles.companyHeader}>
                  <p>Vosyn • Etobicoke, ON</p>
                </div>
                <div className={styles.companyPosition}>
                  <p>React Developer</p>
                </div>
              </div>
            </div>
            <div className={styles.experienceRightSide}>
              <div className={styles.experienceDate}>
                <p>August 2024 - Present</p>
              </div>
            </div>
          </div>
          <div className={styles.experienceDescription}>
            <p>
              I developed high-performance React.js and Next.js applications
              with Redux for state management and JWT-based authentication. I
              optimized performance with code-splitting, lazy loading, and React
              Hooks, while improving SEO with isomorphic apps. I also wrote
              tests using Jest and React Testing Library to ensure reliability
              and collaborated in Agile teams for fast, high-quality delivery.
            </p>
          </div>
          <div className={`${styles.experienceItem} ${styles.marginTop}`}>
            <div className={styles.experienceItemLeft}>
              <div className={styles.companyLogoContainer}>
                <img
                  src="/softcolon_logo.jpeg"
                  alt="Pritul's Profile"
                  className={styles.companyLogoImage}
                />
              </div>
              <div className={styles.companyDetails}>
                <div className={styles.companyHeader}>
                  <p>Softcolon • Ahmedabad, IN</p>
                </div>
                <div className={styles.companyPosition}>
                  <p>SEO Specialist</p>
                </div>
              </div>
            </div>
            <div className={styles.experienceRightSide}>
              <div className={styles.experienceDate}>
                <p>February 2020 - June 2023</p>
              </div>
            </div>
          </div>
          <div className={styles.experienceDescription}>
            <p>
              I regularly updated websites, ensuring fresh content and seamless
              user experience. I implemented local SEO strategies using tools
              like SEMrush and Ahrefs, boosting rankings in local search
              results. I helped grow an Amazon affiliate website’s sales by
              conducting keyword research, building backlinks, and performing
              on-page and off-page SEO. Additionally, I collaborated with
              graphic designers to create visually appealing and functional
              elements using Adobe Creative Suite and Figma.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
