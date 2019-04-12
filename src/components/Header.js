import React from "react";
import { Link } from "@reach/router";
import styles from "./Header.module.css";
import MenuIcon from "./MenuIcon";
import kokikai from "./kokikai.png";

class Header extends React.PureComponent {
  state = { isOpen: false };

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onMouseEnter = () => {
    this.setState({ isOpen: true });
  };

  onMouseLeave = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const menuStyle = this.state.isOpen
      ? [styles.menuContainer, styles.open].join(" ")
      : styles.menuContainer;
    const menu = (
      <div className={menuStyle}>
        <ul className={styles.menu}>
          <Link to="/about">
            <li className={styles.menuItem}>About Us</li>
          </Link>
          <Link to="/students">
            <li className={styles.menuItem}>For Students</li>
          </Link>
          <Link to="/gallery">
            <li className={styles.menuItem}>Gallery</li>
          </Link>
          <Link to="/">
            <li className={styles.menuItem}>Home</li>
          </Link>
        </ul>
      </div>
    );

    return (
      <div className={styles.container} onMouseLeave={this.onMouseLeave}>
        <div className={styles.top}>
          <Link className={styles.header} to="/">
            <img
              className={styles.kokikai}
              src={kokikai}
              alt="Aikido Kokikai International"
            />
            <span>Aikido Kokikai Berlin</span>
          </Link>
          <div
            className={styles.icon}
            onClick={this.onClick}
            onMouseEnter={this.onMouseEnter}
          >
            <MenuIcon />
          </div>
        </div>
        {menu}
      </div>
    );
  }
}

export default Header;
