import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  caption: string;
  primary?: boolean;
  clickHandler?: () => void;
  disabled?: boolean;
}

export const Button = ({
  caption,
  primary,
  clickHandler,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`${primary ? styles.primary : styles.secondary} ${
        styles.button
      }`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {caption}
    </button>
  );
};
