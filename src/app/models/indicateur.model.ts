import {Departement} from './departement.model';

export interface Link {
  rel: string;
  href: string;
}

export interface Indicateur {
  id: number;
  code: string;
  denomination: string;
  target_value: number;
  realized_value: number;
  _activity: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  links: Link[];
}

export interface IndicateurExport {
  identifiant: number;
  libelle: string;
  valeur_cible: number;
  valeur_realisee: number;
  activite_id: string;
}


export interface ListIndicateurResponse {
  data: Indicateur[];
}
export interface IndicateurResponse {
  data: Indicateur;
}

