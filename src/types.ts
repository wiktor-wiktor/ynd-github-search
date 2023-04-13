type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

type GithubRepo = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
};

type usersSearchStatus = {
  users: GithubUser[];
  isLoading: boolean;
  error: any;
};

type reposSearchStatus = {
  repos: GithubRepo[];
  isLoading: boolean;
  error: any;
};
