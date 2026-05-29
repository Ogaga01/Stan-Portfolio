export type Post = {
  title: string;
  image: string;
  description: string;
  link: string;
};

export type Work = {
  title: string;
  image: string;
  description: string;
  link: string;
  organization: string;
  status?: "current" | "past";
};
