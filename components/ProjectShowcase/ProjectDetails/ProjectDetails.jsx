import styles from "./ProjectDetails.module.css";

const ProjectDetails = () => {
  return (
    <>
      <div className={styles.mainContainer}>
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
          </div>
          <div className={styles.projectIntro}>
            <p>
              The Patient Dashboard UI is a clean, responsive, and visually
              appealing web interface designed to showcase how patients can
              manage their healthcare-related tasks. Built using Next.js,
              Tailwind CSS, and custom CSS, this project serves as a prototype
              for healthcare platforms, focusing on user-friendly navigation and
              an intuitive layout.
            </p>
          </div>
          <div className={styles.projectKeySection}>
            <div className={projectKeySectionContainer}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
