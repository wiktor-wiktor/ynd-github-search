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
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search for a user"
          ref={inputRef}
          value={phrase}
          data-cy="search-input"
          onChange={(e) => {
            setPhrase(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setPhrase(e.currentTarget.value);
              searchContext.dispatch({
                type: "SET_PHRASE",
                payload: phrase,
              });
            }
          }}
        />
        {phrase.length > 0 && (
          <div className={styles.resetButton} data-cy="reset-button">
            <svg
              onClick={() => {
                setPhrase("");
                if (inputRef && inputRef.current) {
                  inputRef.current.focus();
                }
              }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <Button
        caption="Search"
        cy="search-button"
        clickHandler={() => {
          searchContext.dispatch({ type: "SET_PHRASE", payload: phrase });
        }}
        disabled={isSearchButtonDisabled()}
        primary
      />
    </div>
  );
};
