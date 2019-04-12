import React from "react";
import Layout from "src/components/Layout";
import Content from "src/components/Content";
import about from "./img/about.jpg";
import steve from "./img/steve-sensei.jpg";
import sensei from "./img/sensei.jpg";
import ueshiba from "./img/ueshiba.jpg";
import styles from "./pages.module.css";

const image = {
  src: about,
  alt: "About Aikido Kokikai Berlin"
};

const content = (
  <>
    <div className={styles.heavy}>
      The Four Basic Principles of Kokikai Aikido
    </div>
    <p>
      1. Keep One Point to Develop Calmness
      <br />
      <br />
      2. Relax Progressively
      <br />
      <br />
      3. Find Correct Posture in Everything
      <br />
      <br />
      4. Develop Your Positive Mind
      <br />
    </p>
    <div className={styles.heavy}>About Kokikai Aikido</div>
    <p>
      Kokikai Aikido is a Japanese martial art of self-defense founded by{" "}
      <b>Sensei Shuji Maruyama</b>, a direct student of Morihei Ueshiba, the
      original founder of Aikido. Sensei Maruyama has taught for over six
      decades in Japan, Australia, and the United States. He established the
      Kokikai school in order to promote a style of Aikido that is more focused
      on natural human feeling and effective technique through mind-body
      coordination.
    </p>
    <p>
      A journey to self-mastery, the Kokikai method encourages students to
      realize their full potential in all activities of life by learning to
      respond to aggression and conflict with calmness and relaxation. We seek
      to improve ourselves by training in a form of self-defense based on
      natural movement, not stiff and rigid forms, and by following our four
      basic principles.
    </p>
    <p>
      Aikido is a non-violent art of self-defense. Our focus is less on fighting
      and more on how to develop your natural human abilities so you can benefit
      from your practice in daily life. Most importantly, we have fun! Aikido is
      safe, non-competitive, and will appeal to anyone interested in building
      inner strength, physical confidence, and personal character. If you like
      yoga but think all martial arts are like MMA, then maybe Aikido is for
      you.
    </p>
    <p>Our motto is “minimum effort, maximum effect.” Come find out why!</p>
    <div className={styles.heavy}>About the Dojo</div>
    <p>
      Aikido Kokikai Berlin was founded by <b>Steven Syrek Sensei</b> in 2017.
      It is the first and only Aikido Kokikai dojo in Europe and the only Aikido
      dojo in Berlin where all classes are taught in English.
    </p>
    <p>
      We train at{" "}
      <a
        href="https://randori-pro.de/standorte/randori-pro-mitte/"
        alt="Randori Pro Mitte"
      >
        Randori Pro Mitte
      </a>
      , a beautiful martial arts studio located in central Berlin. Randori Pro
      offers a number of martial arts and fitness courses, which you can take in
      combination with Kokikai Aikido.
    </p>
    <p>
      Classes are in English, but all are welcome regardless of language, age,
      sex, physical ability, or prior martial arts experience. Students of other
      styles of Aikido are also encouraged to join us, but we ask that you wear
      a white belt and practice with “beginner's mind” until you decide to
      follow the Kokikai way.
    </p>
    <div className={styles.heavy}>About the Instructor</div>
    <p>
      <b>Steven Syrek Sensei, 3. dan</b>, has been practicing Aikido since 2002.
      He previously taught from 2008–2017 in New York City before moving to
      Berlin. Steve Sensei is a student of Gary Snyder Sensei, 7. dan, the chief
      instructor of{" "}
      <a href="http://www.nycaikido.com/" alt="Aikido Kokikai NYC">
        Aikido Kokikai NYC
      </a>{" "}
      and also receives regular instruction directly from Sensei Maruyama, who
      has appointed him regional coordinator of Europe for Aikido Kokikai
      International.
    </p>
    <div className={styles.images}>
      <div className={styles.image}>
        <img className={styles.img} src={steve} alt="Steven Syrek Sensei" />
        <p>
          Steven Syrek, student of Sensei Maruyama and chief instructor of
          Aikido Kokikai Berlin
        </p>
      </div>
      <p className={styles.image}>
        <img className={styles.img} src={sensei} alt="Sensei Shuji Maruyama" />
        <span>
          Shuji Maruyama, student of Ueshiba and founder of Aikido Kokikai
          International
        </span>
      </p>
      <p className={styles.image}>
        <img
          className={styles.img}
          src={ueshiba}
          alt="Sensei Morihei Ueshiba"
        />
        <span>Morihei Ueshiba, founder of Aikido</span>
      </p>
    </div>
  </>
);

const About = () => (
  <Layout>
    <Content image={image} content={content} />
  </Layout>
);

export default About;
