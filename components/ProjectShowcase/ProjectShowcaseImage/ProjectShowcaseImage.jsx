import styles from "./ProjectShowcaseImage.module.css";

const ProjectShowcaseImage = ({ videoUrl }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.video}>
          <img
            src="/laptop-under-budget.png"
            alt="Pritul's Profile"
            className={styles.videoPlayer}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectShowcaseImage;
