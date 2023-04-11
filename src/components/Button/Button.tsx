import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  caption: string;
  primary?: boolean;
  clickHandler?: () => void;
}

export const Button = ({ caption, primary, clickHandler }: ButtonProps) => {
  return (
    <button
      className={`${primary ? styles.primary : styles.secondary} ${
        styles.button
      }`}
      onClick={clickHandler}
    >
      {caption}
    </button>
  );
};
