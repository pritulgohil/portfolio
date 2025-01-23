import styles from "./page.module.css";
import ProjectShowcaseHeader from "../../../components/ProjectShowcase/ProjectShowcaseHeader/ProjectShowcaseHeader";
import Footer from "../../../components/Footer/Footer";
import ProjectShowcaseImage from "../../../components/ProjectShowcase/ProjectShowcaseImage/ProjectShowcaseImage";

const page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectShowcaseImage />
        <ProjectShowcaseHeader
          headerText={
            "SEO Optimization for Amazon Affiliate Website: Boosting Sales and Traffic"
          }
          showLinkIcon
          siteLink={"https://laptopunderbudget.com/"}
        />
        <div className={styles.wrapperContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.skillPills}>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/wordpress.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Wordpress</div>
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
                    src="/ahrefs.webp"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Ahrefs</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/semrush.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Semrush</div>
              </div>
            </div>
            <div className={styles.projectIntro}>
              <p>
                I developed and optimized an Amazon affiliate website,
                implementing effective SEO strategies to rank on Google and
                drive organic traffic. Through comprehensive keyword research,
                on-page optimization, and the creation of high-quality, relevant
                content, the site achieved prominent search engine rankings.
                Additionally, I built authoritative backlinks to enhance domain
                credibility and improve visibility. These efforts resulted in a
                significant increase in traffic and boosted affiliate sales,
                showcasing my ability to blend technical expertise with
                marketing strategies to achieve measurable results.
              </p>
            </div>
            <div className={styles.projectKeySection}>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>1. SEO Implementation:</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Conducted detailed keyword research, optimized meta tags,
                      and improved on-page content to rank higher on Google.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>2. Backlink Building</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      Created and secured high-quality backlinks from reputable
                      sources to increase domain authority and drive referral
                      traffic.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>3. Traffic and Sales Boost</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      These combined efforts resulted in a substantial rise in
                      organic traffic, higher click-through rates, and a
                      noticeable increase in affiliate sales.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.purposeContainer}>
              <h2 className={styles.purposeHeader}>Purpose and Benefits</h2>
              <img
                src="/amazon-affiliate.jpeg"
                alt="Pritul's Profile"
                className={styles.analyticsImage}
              />
              <p className={styles.benefitsText}>
                The purpose of implementing SEO strategies and building
                backlinks for the Amazon affiliate website was to drive more
                organic traffic and increase affiliate earnings. By improving
                search engine rankings through keyword optimization and securing
                high-quality backlinks, the site attracted more targeted
                visitors, leading to higher click-through rates on affiliate
                links. This resulted in a significant boost in sales and
                commissions, showcasing how effective SEO can directly impact
                revenue generation and profitability for affiliate websites.
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
