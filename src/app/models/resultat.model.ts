import {Action} from './action.model';

export interface Link {
  rel: string;
  href: string;
}

export interface Resultat {
  identifiant: number;
  code: string;
  libelle: string;
  _user: string;
  _objectif: string;
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

export interface ListeResultatResponse {
  data: Resultat[];
  meta: Meta;
}


export interface ResultatResponse {
  data: Resultat;
}
