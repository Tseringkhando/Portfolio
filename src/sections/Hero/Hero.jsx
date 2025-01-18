import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import resume from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img className={styles.heroImg} src={heroImg} alt="logo" />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>

        <div className={styles.info}>
          <h1>Tsering Khando Lama</h1>
          <h2>Nobody</h2>
          <span>
            <a href="https:\\www.linkedin.com/in/khando" target="_blank">
              <img src={linkedinIcon} alt="Link to linkedin" />
            </a>
            <a href="https:\\www.github.com/tseringkhando" target="_blank">
              <img src={githubIcon} alt="Link to github" />
            </a>
          </span>
          <p className={styles.description}>Never stop learning</p>
          <a href={resume} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
