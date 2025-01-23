import styles from "./Education.module.css";

const Education = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.experienceSection}>
          <div className={styles.experienceSectionHeader}>
            <h3>Education</h3>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.experienceItemLeft}>
              <div className={styles.companyLogoContainer}>
                <img
                  src="/fanshawe.jpg"
                  alt="Pritul's Profile"
                  className={styles.companyLogoImage}
                />
              </div>
              <div className={styles.companyDetails}>
                <div className={styles.companyHeader}>
                  <p>Fanshawe College</p>
                </div>
                <div className={styles.companyPosition}>
                  <p>Mobile Applications Development</p>
                </div>
              </div>
            </div>
            <div className={styles.experienceRightSide}>
              <div className={styles.experienceDate}>
                <p>September 2023 - December 2024</p>
              </div>
            </div>
          </div>
          <div className={`${styles.experienceItem} ${styles.marginTop}`}>
            <div className={styles.experienceItemLeft}>
              <div className={styles.companyLogoContainer}>
                <img
                  src="/silveroak.png"
                  alt="Pritul's Profile"
                  className={styles.companyLogoImage}
                />
              </div>
              <div className={styles.companyDetails}>
                <div className={styles.companyHeader}>
                  <p>Silveroak University</p>
                </div>
                <div className={styles.companyPosition}>
                  <p>B.Tech in Information Technology</p>
                </div>
              </div>
            </div>
            <div className={styles.experienceRightSide}>
              <div className={styles.experienceDate}>
                <p>May 2016 - January 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
