import React from "react";
import Layout from "src/components/Layout";
import home from "./img/home.jpg";
import styles from "./Home.module.css";

const Home = () => (
  <Layout>
    <div className={styles.container}>
      <img
        className={styles.hero}
        src={home}
        alt="Welcome to Aikido Kokikai Berlin"
      />
      <div>
        <p className={styles.quote}>
          <b>“Minimum effort, maximum effect”</b>
          {/* <br />
          <b>„Minimale Anstrengung, maximale Auswirkung“</b> */}
        </p>
        <div className={styles.box}>
          <span className={styles.heavy}>Aikido in English</span>
        </div>
        <div>
          <ul className={styles.list}>
            <li>Develop your human potential</li>
            <li>Practice mind-body coordination</li>
            <li>Learn to be powerful in daily life</li>
            <li>Resolve conflict peacefully</li>
            <li>Find strength without muscle power</li>
            <li>Achieve calmness, self-control, and relaxation</li>
            <li>Train in ethical self-defense</li>
            <li>Your first class is free!</li>
          </ul>
        </div>
        <div className={styles.box}>
          <span className={styles.heavy}>Class Times</span> <br />
          <div className={styles.schedule}>
            <div>
              <span>Monday</span> <span>19:45</span>
            </div>
            <div>
              <span>Wednesday</span> <span>19:45</span>
            </div>
          </div>
          <div className={styles.address}>
            <a
              href="https://goo.gl/maps/UuD9JHbNXj72"
              rel="noopener noreferrer"
              target="_blank"
            >
              Randori Pro Mitte <br />
              Chausseestraße 102
            </a>
          </div>
        </div>
        <div className={styles.join}>
          <a href="https://www.meetup.com/aikido-kokikai-berlin/">
            <span className={styles.heavy}>Join on Meetup</span>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
