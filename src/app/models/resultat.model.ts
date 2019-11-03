import {Action} from './action.model';

export interface Link {
  rel: string;
  href: string;
}

export interface Resultat {
  id: number;
  code: string;
  denomination: string;
  _objective: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  links: Link[];
}

export interface Links {
  next: string;
}


export interface ListeResultatResponse {
  data: Resultat[];
}


export interface ResultatResponse {
  data: Resultat;
}
