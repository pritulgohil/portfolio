import styles from "./ProjectShowcase.module.css";

const ProjectShowcase = ({ videoUrl }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.video}>
          <video className={styles.videoPlayer} autoPlay muted loop>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;
