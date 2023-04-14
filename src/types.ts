export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
};

export type usersSearchStatus = {
  users: GithubUser[];
  isLoading: boolean;
  error: any;
};

export type reposSearchStatus = {
  repos: GithubRepo[];
  isLoading: boolean;
  error: any;
};
