import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <h1 className={styles.getInTouch}>Get in Touch</h1>
          <p className={styles.contactText}>
            Feel free to reach out with a direct question on LinkedIn, and I'll
            get back to you as soon as possible.
          </p>
        </div>
        <div className={styles.divider}>
          <hr />
        </div>
        <div className={styles.credits}>
          <span>
            Portfolio made with NextJs, source code available on Github
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
