import {Programme} from './programme.model';


export interface Link {
      rel: string;
      href: string;
  }

  export interface Action {
      identifiant: number;
      code: string;
      libelle: string;
      poids: number;
      _user: string;
      _resultat: string;
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

  export interface ListActionResponse {
      data: Action[];
      meta: Meta;
  }


export interface ActionResponse {
  data: Action;
}
