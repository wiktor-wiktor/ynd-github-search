import React from "react";

import styles from "./loader.module.scss";

interface LoaderProps {}

export const Loader = ({}: LoaderProps) => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};
