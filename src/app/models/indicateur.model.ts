import {Departement} from './departement.model';

export interface Link {
  rel: string;
  href: string;
}

export interface Indicateur {
  identifiant: number;
  libelle: string;
  valeur_cible: number;
  valeur_realisee: number;
  activite_id: string;
  _user: string;
  created_at: string;
  updated_at: string;
  links: Link[];
}

export interface IndicateurExport {
  identifiant: number;
  libelle: string;
  valeur_cible: number;
  valeur_realisee: number;
  activite_id: string;
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

export interface ListIndicateurResponse {
  data: Indicateur[];
  meta: Meta;
}
export interface IndicateurResponse {
  data: Indicateur;
}

