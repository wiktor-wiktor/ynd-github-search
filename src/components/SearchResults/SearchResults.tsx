import { useContext } from "react";
import { Accordion } from "react-accessible-accordion";
import "./assets/accordion.scss";

import styles from "./search-results.module.scss";
import { UserCard } from "../UserCard/UserCard";
import { SearchContext } from "../../SearchReducer";

interface SearchResultsProps {}

export const SearchResults = ({}: SearchResultsProps) => {
  const searchContext = useContext(SearchContext);

  return (
    <div className={styles.searchResults}>
      <p
        className={styles.info}
      >{`Search for a user to see their repositories.`}</p>
      {searchContext.usersSearchStatus.isLoading && (
        <p className={styles.info}>Loading...</p>
      )}
      {searchContext.usersSearchStatus.error && (
        <p className={styles.info}>Error</p>
      )}
      <Accordion
        allowZeroExpanded
        onChange={(userLogin) => {
          searchContext.dispatch({
            type: "SET_USERNAME",
            payload: userLogin[0]?.toString() || "",
          });
        }}
      >
        {searchContext.usersSearchStatus.users.map((user) => (
          <UserCard key={user.id} userData={user} />
        ))}
      </Accordion>
    </div>
  );
};
