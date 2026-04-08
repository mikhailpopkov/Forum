export interface Users {
  data: UserData[] | null;
  meta: Meta | null;
  status?: "idle" | "loading" | "success" | "error";
}

interface UserData {
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
}
