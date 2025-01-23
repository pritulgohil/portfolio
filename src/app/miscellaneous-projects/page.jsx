import styles from "./page.module.css";
import ProjectShowcase from "../../../components/ProjectShowcase/ProjectShowcase";
import ProjectShowcaseHeader from "../../../components/ProjectShowcase/ProjectShowcaseHeader/ProjectShowcaseHeader";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectShowcase videoUrl={"/videos/misc-projects.mp4"} />
        <ProjectShowcaseHeader headerText={"Miscellaneous Projects"} />
        <div className={styles.wrapperContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.skillPills}>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/html.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>HTML</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/css.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>CSS</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/javascript.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>JavaScript</div>
              </div>
            </div>
            <div className={styles.projectKeySection}>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>1. Fylo Landing Page</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-fylo.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/fylo-landing-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/fylo-landing-page.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>2. Huddle Landing Page</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-huddle-full.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/huddle-full-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/huddle-landing-page.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>3. Testimonial and Reviews</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-social-proof.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/social-proof"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/ratings.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>4. Huddle Landing Page</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-huddle.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/huddle-landing-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/huddle.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>5. Daily UI Landing Page Clone</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-daily-ui-clone.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/daily-ui-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/daily-ui-clone.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>6. Tesla Landing Page Clone</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-tesla-landing-page.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/tesla-landing-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/tesla.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>7. Tesla Roadster Colors</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-tesla-colors.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/tesla-roadster-color"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/tesla-roadster.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>8. Cara Landing Page</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://cara-landing-page.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/cara-landing-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/cara-landing-page.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>9. Bill Splitter</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-tip-calc.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/tip-calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/bill-splitter.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>10. Rating Component</h2>
                  <div className={styles.Icons}>
                    <a
                      href="https://pritul-rating-component.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/link-icon.png"
                        alt="Link Icon"
                        className={styles.linkIcon}
                      />
                    </a>
                    <a
                      href="https://github.com/pritulgohil/interactive-rating-component"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/github.webp"
                        alt="GitHub Icon"
                        className={styles.githubIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.sectionDetails}>
                  <img
                    src="/rating-component.png"
                    alt="Pritul's Profile"
                    className={styles.analyticsImage}
                  />
                </div>
              </div>
            </div>
            <div className={styles.footerContainer}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
