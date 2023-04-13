import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import styles from "./user-card.module.scss";

type repoData = {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
};

type userData = {
  id: number;
  userName: string;
  repos: repoData[];
};

interface UserCardProps {
  userData: userData;
}

export const UserCard = ({ userData }: UserCardProps) => {
  return (
    <AccordionItem key={userData.id} className={styles.userCard}>
      <AccordionItemHeading>
        <AccordionItemButton>
          {userData.userName}
          <svg className="chevron" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ul className={styles.repos}>
          {userData.repos.map((repo) => (
            <li key={repo.id} className={styles.repo}>
              <div className={styles.text}>
                <div className={styles.name}>{repo.name}</div>
                <div className={styles.description}>{repo.description}</div>
              </div>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.value}>{repo.stars}</div>
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
                {/* <div className={styles.forks}>
                  {repo.forks}
                  <svg
                    fill="currentColor"
                    className="fork"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3h-1v2h1v12h-1v2h1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 3H4v2h1v12H4v2h1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm7 0h-1v2h1v12h-1v2h1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                  </svg>
                </div> */}
              </div>
            </li>
          ))}
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
  );
};
