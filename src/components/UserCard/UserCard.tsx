import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { useContext } from "react";
import { SearchContext } from "../../SearchReducer";

import styles from "./user-card.module.scss";

interface UserCardProps {
  userData: GithubUser;
}

export const UserCard = ({ userData }: UserCardProps) => {
  const searchContext = useContext(SearchContext);

  return (
    <AccordionItem
      key={userData.id}
      className={styles.userCard}
      uuid={userData.login}
    >
      <AccordionItemHeading>
        <AccordionItemButton>
          {userData.login}
          <svg className="chevron" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {searchContext.reposSearchStatus.isLoading && <p>Loading...</p>}
        {searchContext.reposSearchStatus.error && <p>Error</p>}
        {searchContext.reposSearchStatus.isLoading === false &&
          searchContext.reposSearchStatus.error === null && (
            <ul className={styles.repos}>
              {searchContext.reposSearchStatus.repos.length === 0 && (
                <p>No repositories found</p>
              )}
              {searchContext.reposSearchStatus.repos.map((repo) => (
                <li key={repo.id} className={styles.repo}>
                  <div className={styles.text}>
                    <div className={styles.name}>{repo.name}</div>
                    <div className={styles.description}>{repo.description}</div>
                  </div>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <div className={styles.value}>
                        {repo.stargazers_count}
                      </div>
                      <div className={styles.icon}>
                        <svg
                          className="star"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
      </AccordionItemPanel>
    </AccordionItem>
  );
};
