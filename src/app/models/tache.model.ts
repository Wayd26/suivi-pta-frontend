
export interface Link {
  rel: string;
  href: string;
}

export interface Tache {
  identifiant: number;
  libelle: string;
  code: string;
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

export interface ListTacheResponse {
  data: Tache[];
  meta: Meta;
}

export interface TacheResponse {
  data: Tache;
  }
