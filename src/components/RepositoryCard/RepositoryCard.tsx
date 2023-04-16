import { useContext } from "react";

import styles from "./repository-card.module.scss";
import { SearchContext } from "../../SearchReducer";

interface RepositoryCardProps {}

export const RepositoryCard = ({}: RepositoryCardProps) => {
  const searchContext = useContext(SearchContext);

  return (
    <>
      {searchContext.reposSearchStatus.repos.map((repo) => (
        <li key={repo.id} className={styles.repositoryCard}>
          <div className={styles.text}>
            <div className={styles.name}>{repo.name}</div>
            <div className={styles.description}>{repo.description}</div>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.value}>{repo.stargazers_count}</div>
              <div className={styles.icon}>
                <svg
                  className={styles.star}
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
    </>
  );
};
