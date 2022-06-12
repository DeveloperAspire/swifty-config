import React from "react";
import styles from "../src/styles/app.module.scss";

const App = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__content"]}>
        <h1 className={styles["container__heading"]}>⚡️ Swifty Config</h1>
        <p className={styles["container__text"]}>
          A Frontend project configuration tool 🛠️.
        </p>
        <p className={styles["container__text"]}>
          With one command, setup your Frontend project with additional
          configuration out of the box.
        </p>
      </div>
    </div>
  );
};

export default App;
