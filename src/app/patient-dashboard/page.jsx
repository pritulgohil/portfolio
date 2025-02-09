import styles from "./page.module.css";
import ProjectShowcase from "../../../components/ProjectShowcase/ProjectShowcase";
import ProjectShowcaseHeader from "../../../components/ProjectShowcase/ProjectShowcaseHeader/ProjectShowcaseHeader";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectShowcase videoUrl={"/videos/Patient-Dashboard-Video.mp4"} />
        <ProjectShowcaseHeader
          headerText={"Patient Dashboard"}
          showLinkIcon
          showGithubIcon
          siteLink={"https://patient-dashboard-pritul.vercel.app/"}
          githubLink={"https://github.com/pritulgohil/Patient-Dashboard"}
        />{" "}
        <div className={styles.wrapperContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.skillPills}>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/nextjs.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>NextJs</div>
              </div>
              <div className={styles.skillPill}>
                <div className={styles.imagePill}>
                  <img
                    src="/tailwind.png"
                    alt="Pritul's Profile"
                    className={styles.skillImage}
                  />
                </div>
                <div className={styles.skillName}>Tailwind</div>
              </div>
            </div>
            <div className={styles.projectIntro}>
              <p>
                The Patient Dashboard UI is a clean, responsive, and visually
                appealing web interface designed to showcase how patients can
                manage their healthcare-related tasks. Built using Next.js,
                Tailwind CSS, and custom CSS, this project serves as a prototype
                for healthcare platforms, focusing on user-friendly navigation
                and an intuitive layout.
              </p>
            </div>
            <div className={styles.projectKeySection}>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>1. Appointments Section</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      <strong>Overview Interface:</strong> A neatly designed
                      section that allows users to view a list of upcoming and
                      past appointments.
                    </li>
                    <li>
                      <strong>Appointment Details:</strong> Cards displaying
                      appointment information like doctor’s name, date, time,
                      and location.
                    </li>
                    <li>
                      <strong>Responsive Design:</strong> Ensures a seamless
                      user experience across all devices.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>2. Invoices Section</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      <strong>Invoice Display:</strong> A dedicated section with
                      clean, tabular views of invoices.
                    </li>
                    <li>
                      <strong>Status Indicators:</strong> Visual elements (e.g.,
                      color tags) to signify invoice statuses like paid or
                      pending.
                    </li>
                    <li>
                      <strong>Download Option:</strong> Placeholder buttons for
                      potential invoice downloads.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>3. Dashboard Overview</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      <strong>Health Metrics: </strong> Placeholder widgets or
                      cards for displaying health data like weight, BMI, and
                      recent health updates.
                    </li>
                    <li>
                      <strong>User Profile Card:</strong> A section showcasing
                      patient details, such as name, profile picture, and basic
                      information.
                    </li>
                    <li>
                      <strong>Interactive Layout:</strong> Organized grids and
                      panels to give the dashboard a professional and polished
                      appearance.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectKeySectionContainer}>
                <div className={styles.sectionHeader}>
                  <h2>4. Other UI Features</h2>
                </div>
                <div className={styles.sectionDetails}>
                  <ul className={styles.sectionList}>
                    <li>
                      <strong>Navigation Bar:</strong> A minimalistic side
                      navigation bar for switching between sections like
                      appointments, invoices, and settings.
                    </li>
                    <li>
                      <strong>Customizable Cards:</strong> A modular design for
                      each section, making it easy to add or modify content.
                    </li>
                    <li>
                      <strong>Dark Mode Ready:</strong> Includes design elements
                      and styles that support both light and dark modes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.purposeContainer}>
              <h2 className={styles.purposeHeader}>Purpose and Benefits</h2>
              <p>
                This project highlights the design and prototyping process for a
                healthcare dashboard. While it lacks backend functionality, the
                Patient Dashboard UI demonstrates proficiency in front-end
                development, responsive design, and the ability to create
                scalable and visually engaging user interfaces.
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
