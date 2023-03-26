import Head from "next/head";
import styles from "../styles/Splash.module.css";
import Loading from "../public/images/greatenft.jpg";
export default function Splash() {
  return (
    <div className={styles.container}>
      <div className="box">
        <img
          src={Loading.src}
          alt="loading image"
          className={styles.loading_img}
        />
      </div>
      <div className={styles.text_container}>
        <h1 className={styles.animated_text}>Welcome</h1>
      </div>
      <p className={styles.animated_text}>
        Thank you for visiting! We're excited to share our products and services
        with you.
      </p>
    </div>
  );
}
