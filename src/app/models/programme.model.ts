export interface Link {
  rel: string;
  href: string;
}

export interface Programme {
  identifiant: number;
  code: string;
  libelle: string;
  poids: number;
  _exercice: string;
  _ministere: string;
  _user: string;
  created_at: string;
  updated_at: string;
  links: Link[];
}

export interface Links {
  next: string;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: Links;
}

export interface Meta {
  pagination: Pagination;
}

export interface ListProgrammeResponse {
  data: Programme[];
  meta: Meta;
}
export interface ProgrammeResponse {
  data: Programme;
}
