
export interface Link {
  rel: string;
  href: string;
}

export interface ObjectifModel {
  id: number;
  code: string;
  denomination: string;
  _programm: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  links: Link[];
}
export interface ObjectifModelExport {
  identifiant: number;
  code: string;
  libelle: string;
  _programme: string;
}

export interface Links {
  next: string;
}


export interface ListObjectifResponse {
  data: ObjectifModel[];
}

export interface ObjectifResponse {
  data: ObjectifModel;
}
