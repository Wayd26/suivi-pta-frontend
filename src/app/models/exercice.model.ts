
export interface Link {
  rel: string;
  href: string;
}

export interface Exercice {
  identifiant: number;
  denomination: string;
  date_debut: string;
  date_fin: string;
  annee: number;
  _user: string;
  created_at: string;
  updated_at: string;
  links: Link[];
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: any[];
}

export interface Meta {
  pagination: Pagination;
}

export interface ListExerciceResponse {
  data: Exercice[];
  meta: Meta;
}

export interface ExerciceResponse {
  data: Exercice;
}
