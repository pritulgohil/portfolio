import styles from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainSection}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.headerName}>Hi, I'm Pritul 👋</h1>
          <div className={styles.social}>
            <div className={styles.linkedinLogo}>
              <a
                href="https://www.linkedin.com/in/pritul-gohil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.webp"
                  alt="Pritul's Profile"
                  className={styles.contactLogo}
                />
              </a>
            </div>
            <div className={styles.githubLogo}>
              <a
                href="https://github.com/pritulgohil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/github.webp"
                  alt="Pritul's Profile"
                  className={styles.contactLogo}
                />
              </a>
            </div>
          </div>
          <p className={styles.portfolioBio}>
            With over 3 years of hands-on experience in web development and SEO,
            I specialize in building scalable, user-centric web applications and
            optimizing digital platforms for maximum visibility. Passionate
            about crafting seamless user experiences, I excel in combining
            technical skills with creative design to deliver innovative
            solutions.
          </p>
        </div>
        <div className={styles.profilePhotoContainer}>
          <img
            src="/profile.jpeg"
            alt="Pritul's Profile"
            className={styles.profileImage}
          />
        </div>
      </div>
      <div className={styles.subSection}>
        <h3>About</h3>
        <p className={`${styles.subSectionText} ${styles.marginTop}`}>
          I am proficient in React.js, Vue.js, and modern web technologies, with
          a strong background in SEO tools like SEMrush, Ahrefs, and Google
          Analytics. My expertise spans developing dynamic interfaces, managing
          state with Redux, and implementing local SEO strategies to drive
          measurable results.
        </p>
        <p className={`${styles.subSectionText} ${styles.marginTop}`}>
          Beyond coding and SEO, I enjoy collaborating with teams, leveraging
          Agile methodologies, and staying ahead of industry trends. You’ll
          often find me experimenting with new tech stacks or sharing insights
          on LinkedIn and GitHub.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
