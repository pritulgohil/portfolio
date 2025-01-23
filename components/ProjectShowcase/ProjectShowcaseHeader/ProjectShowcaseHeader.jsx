import styles from "./ProjectShowcaseHeader.module.css";

const ProjectShowcaseHeader = ({
  headerText,
  showLinkIcon,
  showGithubIcon,
  siteLink,
  githubLink,
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h1>{headerText}</h1>
        <div className={styles.Icons}>
          {showLinkIcon && (
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/link-icon.png"
                alt="Link Icon"
                className={styles.linkIcon}
              />
            </a>
          )}
          {showGithubIcon && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/github.webp"
                alt="GitHub Icon"
                className={styles.githubIcon}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcaseHeader;
