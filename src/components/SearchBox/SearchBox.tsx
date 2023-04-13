import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";

import styles from "./search-box.module.scss";

interface SearchBoxProps {}

export const SearchBox = ({}: SearchBoxProps) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search for a user"
        ref={inputRef}
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
      />
      <Button
        caption="Search"
        clickHandler={() => console.log(searchPhrase)}
        primary
      />
    </div>
  );
};
