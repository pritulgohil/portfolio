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
                  <p>React Developer & Help Desk Technician</p>
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
              optimized app performance through code-splitting, lazy loading,
              and React Hooks, and improved SEO with isomorphic apps. I wrote
              tests with Jest and React Testing Library to ensure reliability,
              while collaborating with Agile teams for fast, high-quality
              delivery. <br />
              <br />
              Additionally, I provided technical support via tickets, resolving
              customer issues promptly and ensuring satisfaction. Using remote
              control tools, I troubleshot and resolved issues, maintaining a
              seamless experience. I worked with TypeScript, Redux, and RxJS to
              optimize app performance and manage state. I also collaborated
              with cross-functional teams to propose solutions and process
              improvements, and trained new hires on customer support best
              practices.
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
                  <p>Customer Support Associate</p>
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
              I regularly updated websites to ensure fresh content and a
              seamless user experience. By implementing local SEO strategies
              with tools like SEMrush and Ahrefs, I successfully boosted local
              search rankings. I contributed to growing an Amazon affiliate
              site’s sales through keyword research, backlink building, and
              on-page/off-page SEO. Collaborating with graphic designers, I
              helped create visually appealing, functional elements using Adobe
              Creative Suite and Figma.
              <br />
              <br />
              Additionally, I provided excellent customer support, managing
              inbound inquiries and resolving technical issues. Using ticketing
              systems and databases, I efficiently tracked service requests and
              assisted customers with software setup and troubleshooting through
              remote support tools. I documented feedback to contribute to
              system improvements, helping enhance the customer experience and
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
