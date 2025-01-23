import styles from "./page.module.css";
import ProjectShowcase from "../../../components/ProjectShowcase/ProjectShowcase";
import ProjectShowcaseHeader from "../../../components/ProjectShowcase/ProjectShowcaseHeader/ProjectShowcaseHeader";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectShowcase videoUrl={"/videos/css-unit-converter.mp4"} />
        <ProjectShowcaseHeader
          headerText={"CSS Unit Converter"}
          showLinkIcon
          siteLink={"https://cssunitconverter.com/"}
        />
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
                    src="/bulma.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Bulma CSS</div>
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
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/seo.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>SEO</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/adsense.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Adsense</div>
              </div>
            </div>
            <div className={styles.projectIntro}>
              <p>
                As part of a development team, I contributed to the creation of
                a CSS Unit Converter and other web tools using HTML, Bulma CSS
                Framework, and JavaScript. This tool allows users to easily
                convert pixel (px) values to rem units, facilitating the
                creation of responsive designs for web developers. Additionally,
                the site includes various other helpful tools aimed at improving
                front-end development. The website was optimized for SEO and
                successfully ranked on Google, attracting significant organic
                traffic. Through the site’s targeted traffic, we generated
                revenue via Google AdSense, showcasing our ability to create
                valuable resources and effectively monetize web content.
              </p>
            </div>
            <div className={styles.projectKeySection}>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>1. PX to REM Conversion</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A simple, easy-to-use tool that allows users to convert
                      pixel (px) values to rem units, making it easier for
                      developers to create scalable, responsive designs.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>2. Additional Developer Tools</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Includes other useful tools for front-end development,
                      such as unit converters, CSS helpers, and other resources
                      designed to simplify common tasks in web development.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>3. SEO Optimized</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      The website is optimized for search engines to ensure it
                      ranks well on Google, making it discoverable to a wide
                      audience of developers and users searching for web
                      development tools.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>4. Responsive Design</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      A fully responsive, mobile-friendly design built using
                      Bulma CSS Framework, ensuring a seamless user experience
                      on all devices.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>5. Ad Revenue Generation</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Integrated with Google AdSense, the site generates revenue
                      by displaying relevant ads to visitors, demonstrating
                      effective monetization strategies for web tools.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.purposeContainer}>
              <h2 className={styles.purposeHeader}>Purpose and Benefits</h2>
              <img
                src="/css-unit-analytics.png"
                alt="Pritul's Profile"
                className={styles.analyticsImage}
              />
              <p className={styles.benefitsText}>
                The PX to REM Converter Tool has been highly successful,
                generating around 300K users due to its user-friendly interface
                and SEO optimization. By providing a simple and efficient
                solution for developers to convert pixel (px) values to rem
                units, it saved time and improved workflow. The site’s
                visibility on Google, coupled with its valuable features,
                attracted significant organic traffic, which in turn led to
                increased revenue through Google AdSense. This project not only
                demonstrated my development and SEO skills but also showcased my
                ability to create a valuable tool that drives substantial user
                engagement and monetization.
              </p>
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
