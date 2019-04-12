import React from "react";
import Layout from "src/components/Layout";
import Content from "src/components/Content";
import dojo from "./img/students.jpg";
import styles from "./pages.module.css";

const image = {
  src: dojo,
  alt: "The students of Aikido Kokikai Berlin"
};

const content = (
  <>
    <div className={styles.heavy}>Information for Current Students</div>
    <p>
      All students at Aikido Kokikai Berlin should be familiar with the
      following information. It covers basic etiquette, testing, uniforms and
      equipment, camps, and fees.
    </p>
    <div className={styles.heavy}>Basic Etiquette</div>
    <ul className={styles.list}>
      <li>Arrive early to class so you can help sweep and set up the dojo.</li>
      <li>
        Wear sandals from the changing room to the mat. No footwear is allowed
        on the mat at any time.
      </li>
      <li>Do not bring food or beverages of any kind into the dojo.</li>
      <li>Bow before entering and leaving the mat.</li>
      <li>Keep your fingernails and toenails trimmed.</li>
      <li>Always practice in a clean gi (uniform).</li>
      <li>Do not wear jewelry during class.</li>
      <li>
        Treat your fellow students with kindness, and respect those with a
        higher rank.
      </li>
      <li>Train with safety in mind and uke helpfully.</li>
      <li>During class, address the instructor as “sensei.”</li>
      <li>Avoid talking excessively while training.</li>
      <li>
        If you arrive to class late, sit in seiza on the side of the mat and
        wait for the instructor’s permission to join.
      </li>
    </ul>
    <div className={styles.heavy}>Testing</div>
    <p>
      Students who practice regularly will be invited to test for rank
      promotion. Testing occurs several times throughout the year. Tests are
      non-competitive demonstrations of the techniques you have learned during
      your training. While we call it a test, it is more of an opportunity for
      the dojo community to celebrate and acknowledge your commitment to Aikido.
      If your instructor invites you to test, it basically means you have
      already passed—but you still have to do it!
    </p>
    <p>
      Testing requirements vary depending on your rank. For example, you are
      eligible to test for 6th kyu after practicing for a minimum of 2 months
      with 16 hours of instruction. Please note that these are guidelines only.
      Students who wish to test are expected to train regularly and exceed the
      minimum requirements.
    </p>
    <p>
      If you believe you are eligible to test, please check your attendance
      record on Meetup (or with Randori Pro) and submit to Steve Sensei the
      following information:
    </p>
    <ul className={styles.list}>
      <li>Name</li>
      <li>Current rank</li>
      <li>Testing rank</li>
      <li>Belt size requested</li>
      <li>Date of previous test (or when you started Aikido)</li>
      <li>Number of classes attended since last test</li>
      <li>
        Optional: what you would like to practice more of to improve your test
      </li>
    </ul>
    <p>Note that there is an additional fee for testing.</p>
    <div className={styles.heavy}>Uniforms and Equipment</div>
    <p>
      Discounted <i>gi</i> (uniforms) are available at{" "}
      <a href="http://www.asiasport.de/" alt="AsiaSport">
        AsiaSport
      </a>{" "}
      in Prenzlauerberg and Kreuzberg. Judo gi tend to be the most appropriate
      and comfortable for beginners, but medium weight (not lightweight) karate
      gi also work. Note that in Kokikai, we prefer gi sleeves to extend to the
      wrists. Try to avoid “aikido” gi with shorter sleeves. Gi are also
      available as a part of your registration package when you sign up with
      Randori Pro Mitte.
    </p>
    <p>
      You may also want to purchase wooden practice weapons: <i>tanto</i>{" "}
      (knife), <i>bokken</i> (sword), and <i>jo</i> (staff).
    </p>
    <p>
      Aikido Kokikai T-shirts, coffee mugs, and other swag are now available!
      Order yours directly from{" "}
      <a href="https://teespring.com/aikido-kokikai-berlin" alt="Teespring">
        Teespring
      </a>
      .
    </p>

    <div className={styles.heavy}>Camps</div>
    <p>
      Sensei Shuji Maruyama leads several weekend-long camps per year in various
      places around the world. There are generally camps in the New York/New
      Jersey area in the US at the beginning of March and the end of July; a
      camp in Sydney, Australia in October; a Boston camp at the beginning of
      November; a camp in the middle of November that rotates between Seattle,
      Phoenix, and San Francisco in the US; and occasional events in Japan.
      Students of Aikido Kokikai Berlin are welcome and encouraged to attend any
      of these camps along with their instructor.
    </p>
    <div className={styles.heavy}>Fees</div>
    <p>
      <b>Training fees</b>: paid monthly to Randori Pro Mitte, varies depending
      on how often you want to train and the length of your contract. Additional
      registration fee includes a practice uniform.
    </p>
    <p>
      <b>Testing fees</b>: paid to Aikido Kokikai Berlin for the right to test
      for a rank promotion. The amount depends on the rank being tested for.
    </p>
    <p>
      <b>Dojo membership fees</b>: paid to Aikido Kokikai Berlin once per year.
      The current fee is 50€. Your first year of membership is included for free
      as part of your 6th kyu testing fee.
    </p>
    <p>
      Training fees pay for our access to the dojo space at Randori Pro. Testing
      fees and the dojo membership fee pay for equipment, help us bring in
      visiting instructors, and in general support the growth of Aikido Kokikai
      Berlin.
    </p>
  </>
);

const Students = () => (
  <Layout>
    <Content image={image} content={content} />
  </Layout>
);

export default Students;
