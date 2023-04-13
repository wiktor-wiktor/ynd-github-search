import { Accordion } from "react-accessible-accordion";
import "./assets/accordion.scss";

import styles from "./search-results.module.scss";
import { UserCard } from "../UserCard/UserCard";

interface SearchResultsProps {}

const mockData = [
  {
    id: 1,
    userName: "user1",
    repos: [
      {
        id: 1,
        name: "My project 1",
        description: "This is my first project",
        stars: 10,
        forks: 5,
      },
      {
        id: 2,
        name: "My project 2",
        description: "This is my second project",
        stars: 20,
        forks: 10,
      },
      {
        id: 3,
        name: "My project 3",
        description: "This is my third project",
        stars: 30,
        forks: 15,
      },
    ],
  },
  {
    id: 2,
    userName: "user2",
    repos: [
      {
        id: 1,
        name: "My project 1",
        description: "This is my first project",
        stars: 10,
        forks: 5,
      },
      {
        id: 2,
        name: "My project 2",
        description: "This is my second project",
        stars: 20,
        forks: 10,
      },
      {
        id: 3,
        name: "My project 3",
        description: "This is my third project",
        stars: 30,
        forks: 15,
      },
    ],
  },
  {
    id: 3,
    userName: "user3",
    repos: [
      {
        id: 1,
        name: "My project 1",
        description: "This is my first project",
        stars: 10,
        forks: 5,
      },
      {
        id: 2,
        name: "My project 2",
        description: "This is my second project",
        stars: 20,
        forks: 10,
      },
      {
        id: 3,
        name: "My project 3",
        description: "This is my third project",
        stars: 30,
        forks: 15,
      },
    ],
  },
];

export const SearchResults = ({}: SearchResultsProps) => {
  return (
    <div className={styles.searchResults}>
      <p
        className={styles.info}
      >{`Search for a user to see their repositories.`}</p>
      <Accordion allowZeroExpanded>
        {mockData.map((item) => (
          <UserCard key={item.id} userData={item} />
        ))}
      </Accordion>
    </div>
  );
};
