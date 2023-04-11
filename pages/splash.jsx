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
        <h1 className={styles.animated_text_h1}>Welcome</h1>
      </div>
      <p className={styles.animated_text}>
        “Thank you for visiting Great Dane AI: We are much more than dogs! We
        are the space exploration, flowers year round, soldiers, best friends,
        citizens and much more NFT and DAPP Market Place…”
      </p>
    </div>
  );
}

