import { useQuery } from 'react-query';

export type ArticleList = {
  id: number;
  article_title: string;
  article_content_url: string;
  article_thumbnail_url: string;
};

export type ArticleListResponse = {
  DATA: ArticleList[];
};
export const useGetArticleListQuery = () => {
  return useQuery<ArticleListResponse>('/articles');
};
