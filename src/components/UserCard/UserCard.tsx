import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { useContext } from "react";
import { SearchContext } from "../../SearchReducer";
import { GithubUser } from "../../types";

import styles from "./user-card.module.scss";
import { Loader } from "../Loader/Loader";
import { RepositoryCard } from "../RepositoryCard/RepositoryCard";

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
      <span
        onClick={(e) => {
          const list = e.currentTarget;
          setTimeout(() => {
            window.scrollTo({
              top: list.offsetTop,
              behavior: "smooth",
            });
          }, 100);
        }}
      >
        <AccordionItemHeading>
          <AccordionItemButton>
            {userData.login}
            <svg className="chevron" width="24" height="24" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </AccordionItemButton>
        </AccordionItemHeading>
      </span>
      <AccordionItemPanel>
        {searchContext.reposSearchStatus.isLoading && <Loader />}
        {searchContext.reposSearchStatus.error && <p>Error</p>}
        {searchContext.reposSearchStatus.isLoading === false &&
          searchContext.reposSearchStatus.error === null && (
            <ul className={styles.repos}>
              {searchContext.reposSearchStatus.repos.length === 0 && (
                <p>No repositories found</p>
              )}
              <RepositoryCard />
            </ul>
          )}
      </AccordionItemPanel>
    </AccordionItem>
  );
};
