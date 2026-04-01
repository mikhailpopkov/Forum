export interface NewsType {
  data: News[];
  meta: NewsMeta | null;
}

interface NewsMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
