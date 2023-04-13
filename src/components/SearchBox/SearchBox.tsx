import { useEffect, useRef, useState, useContext } from "react";
import { SearchContext } from "../../SearchReducer";
import { Button } from "../Button/Button";

import styles from "./search-box.module.scss";

interface SearchBoxProps {}

export const SearchBox = ({}: SearchBoxProps) => {
  const [phrase, setPhrase] = useState("");
  const searchContext = useContext(SearchContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearchButtonDisabled = () => {
    return phrase.length < 3;
  };

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
        value={phrase}
        onChange={(e) => {
          setPhrase(e.target.value);
        }}
      />
      <Button
        caption="Search"
        clickHandler={() => {
          searchContext.dispatch({ type: "SET_PHRASE", payload: phrase });
        }}
        disabled={isSearchButtonDisabled()}
        primary
      />
    </div>
  );
};
