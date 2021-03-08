import React from "react";
import styles from "./index.module.css";
import style2 from "./index.css";

export default () => (
  <div>
    <h1>Css Module</h1>
    <div className={styles.moduleColor}>css module text</div>
    <div className={"noModuleColor"}>no css module text</div>
  </div>
);
