import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <h1 className={styles.getInTouch}>Get in Touch</h1>
          <p className={styles.contactText}>
            Feel free to reach out with a direct question on{" "}
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/pritul-gohil/"
              target="_blank"
            >
              LinkedIn
            </a>
            , and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className={styles.divider}>
          <hr />
        </div>
        <div className={styles.credits}>
          <span>
            Portfolio made with NextJs, source code available on{" "}
            <a
              className={styles.link}
              href="https://github.com/pritulgohil/portfolio"
              target="_blank"
            >
              Github
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
