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
