import React from "react";
import { Router } from "@reach/router";
import { Helmet } from "react-helmet";
import loadable from "loadable-components";
import Spinner from "react-spinkit";
import styles from "src/pages/pages.module.css";
import "./App.css";

const spinner = (
  <div className={styles.spinner}>
    <Spinner name="ball-spin-fade-loader" color="#000" />
  </div>
);

const Home = loadable(
  () =>
    import(/* webpackPrefetch: true */
    "src/pages/Home"),
  {
    LoadingComponent: () => spinner,
    modules: ["Home"]
  }
);

const About = loadable(
  () =>
    import(/* webpackPrefetch: true */
    "src/pages/About"),
  {
    LoadingComponent: () => spinner,
    modules: ["About"]
  }
);

const Students = loadable(
  () =>
    import(/* webpackPrefetch: true */
    "src/pages/Students"),
  {
    LoadingComponent: () => spinner,
    modules: ["Students"]
  }
);

const Gallery = loadable(
  () =>
    import(/* webpackPrefetch: true */
    "src/pages/Gallery"),
  {
    LoadingComponent: () => spinner,
    modules: ["Gallery"]
  }
);

const NotFound = loadable(
  () =>
    import(/* webpackPrefetch: true */
    "src/pages/NotFound"),
  {
    LoadingComponent: () => spinner,
    modules: ["NotFound"]
  }
);

const keywords = [
  "aikido",
  "berlin",
  "body",
  "dojo",
  "exercise",
  "japan",
  "japanese",
  "judo",
  "jujitsu",
  "kokikai",
  "martial arts",
  "mind",
  "self-defense",
  "self-improvement",
  "sensei",
  "yoga"
].join(",");

const helmet = (
  <Helmet>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
    <meta
      name="description"
      content="Aikido Kokikai Berlin. Aikido in English. Martial arts and self-defense classes in Berlin. All classes taught in English. The only Aikido Kokikai dojo in Europe."
    />
    <meta name="keywords" content={keywords} />
  </Helmet>
);

const App = () => (
  <>
    {helmet}
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Students path="/students" />
      <Gallery path="/gallery" />
      <NotFound default />
    </Router>
  </>
);

export default App;
