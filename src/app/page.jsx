import Image from "next/image";
import styles from "./page.module.css";
import IntroSection from "../../components/IntroSection/IntroSection";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainSection}>
          <IntroSection />
          <WorkExperience />
          <Education />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}
