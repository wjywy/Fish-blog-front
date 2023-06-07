export type introduce = {
  title: string;
  createTime: string;
  description: string;
  id: string;
  types: string;
};

export type articleType = {
  content: string;
} & introduce;
