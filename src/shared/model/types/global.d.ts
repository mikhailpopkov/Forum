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
