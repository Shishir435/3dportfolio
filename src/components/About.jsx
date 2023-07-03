import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div id="about">
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </div>
      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello, my name is Shishir Chaurasiya, and I am starting a career in Web Designing and Development. I enjoy creating interactive and responsive websites. Please get in touch with me if you have any suggestions.
      </p>
    </div>
  );
};

export default SectionWrapper(About, "about");
