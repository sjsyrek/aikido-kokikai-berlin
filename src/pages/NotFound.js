import React from "react";
import Layout from "src/components/Layout";
import Content from "src/components/Content";
import styles from "./pages.module.css";

const content = (
  <div className={styles.center}>
    <div>404</div>
    <div>Page not found!</div>
  </div>
);

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "404";
  }

  render() {
    return (
      <Layout>
        <Content content={content} />
      </Layout>
    );
  }
}

export default NotFound;
