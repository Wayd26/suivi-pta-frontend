import {Programme} from './programme.model';

export interface Link {
    rel: string;
    href: string;
  }

  export interface SourceFinancement {
    identifiant: number;
    code: string;
    est_projet: boolean;
    libelle: string;
    poids_projet: number;
    chapitre_imputation: string;
    _type: string;
    _user: string;
    created_at: string;
    updated_at: string;
    links: Link[];
  }

  export interface SourceFinancementExport {
    identifiant: number;
    code: string;
    est_projet: boolean;
    libelle: string;
    poids_projet: number;
    chapitre_imputation: string;
    _type: string;
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

  export interface ListSourceFinancementResponse {
    data: SourceFinancement[];
    meta: Meta;
  }

export interface SourceFiResponse {
  data: SourceFinancement;
 }
