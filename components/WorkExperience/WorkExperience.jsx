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
                  <p>Front-End Developer</p>
                </div>
              </div>
            </div>
            <div className={styles.experienceRightSide}>
              <div className={styles.experienceDate}>
                <p>August 2024 - December 2024</p>
              </div>
            </div>
          </div>
          <div className={styles.experienceDescription}>
            <p>
              I developed high-performance React.js and Next.js applications
              with Redux for state management and JWT-based authentication. I
              optimized app performance through code-splitting, lazy loading,
              and React Hooks, and improved SEO with isomorphic apps. I wrote
              tests with Jest and React Testing Library to ensure reliability,
              while collaborating with Agile teams for fast, high-quality
              delivery. <br />
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
                  <p>React Developer</p>
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
              I built responsive, high-performance websites with a focus on
              UI/UX design, cross-browser compatibility, and accessibility. I
              developed interactive web elements and optimized WordPress
              websites for security, speed, and user engagement. Additionally, I
              designed custom graphics and marketing materials using Adobe
              Creative Suite, including Photoshop, Illustrator, and XD. I also
              developed dynamic and scalable web applications using React,
              ensuring seamless performance and user experience. To enhance
              digital marketing campaigns, I integrated third-party APIs,
              automation tools, and email marketing platforms. Furthermore, I
              conducted A/B testing to optimize website conversion rates.
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
