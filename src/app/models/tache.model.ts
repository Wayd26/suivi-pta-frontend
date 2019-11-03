
export interface Link {
  rel: string;
  href: string;
}

export interface Tache {
  id: number;
  code: string;
  denomination: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  links: Link[];
}


export interface TacheExport {
  identifiant: number;
  libelle: string;
  code: string;
}


export interface ListTacheResponse {
  data: Tache[];
}

export interface TacheResponse {
  data: Tache;
  }
