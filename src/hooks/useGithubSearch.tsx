import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export const useGithubUsersSearch = (searchPhrase: string) => {
  const [users, setUsers] = useState<GithubUser[]>([]);

  const { data, isLoading, error, isFetching } = useQuery<GithubUser[]>(
    ["githubUsers", searchPhrase],
    () => {
      return fetch(
        `https://api.github.com/search/users?q=${searchPhrase}&per_page=3`
      )
        .then((res) => res.json())
        .then((data) => data.items);
    },
    {
      enabled: searchPhrase.length > 2,
    }
  );

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return { users, isLoading: isLoading && isFetching, error };
};

export const useGithubUserRepos = (userName: string) => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  const { data, isLoading, error, isFetching } = useQuery<GithubRepo[]>(
    ["githubRepos", userName],
    () => {
      return fetch(`https://api.github.com/users/${userName}/repos`).then(
        (res) => res.json()
      );
    },
    {
      enabled: userName !== null && userName !== "",
    }
  );

  useEffect(() => {
    if (data) {
      setRepos(data);
    }
  }, [data]);

  return { repos, isLoading: isLoading && isFetching, error };
};
