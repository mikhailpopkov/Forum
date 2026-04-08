interface User {
  id: number;
  email: string;
  name: string;
  telegramId: string | null;
  avatarUrl: string | null;
  bio: string | null;
  backgroundUrl: string | null;
  rating: number;
  role: string;
  bannedAt: boolean | null;
  banReason: boolean | null;
  bannedByUserId: boolean | null;
  createdAt: string;
  updatedAt: string;
}

interface UserMe {
  id: number;
  email: string;
  name: string;
  telegramId: string | null;
  avatarUrl: string | null;
  bio: string | null;
  backgroundUrl: string | null;
  rating: number;
  createdAt: string;
  updatedAt: string;
  stats: {
    newsCount: number;
    favoritesCount: number;
  };
}

declare module "*.svg?react" {
  import * as React from "react";
  const component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default component;
}

type CustomAxiosRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

interface News {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string | null;
  views: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  tags: Tags[];
  likesCount: number;
  dislikesCount: number;
  isFavorited: boolean;
}

interface Author {
  id: number;
  name: string;
  email: string;
  avatarUrl: string | null;
  bio: string | null;
  backgroundUrl: string | null;
  rating: number;
  createdAt: string;
}

interface Tags {
  id: number;
  name: string;
}

interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
