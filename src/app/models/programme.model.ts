export interface Link {
  rel: string;
  href: string;
}


export interface Programme {
  id: number;
  code: string;
  denomination: string;
  weight_in_programm: number;
  _exercise: string;
  _ministry: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  links: Link[];
}

export interface ProgrammeExport {
  identifiant: number;
  code: string;
  libelle: string;
  poids: number;
  _exercice: string;
  _ministere: string;
}

export interface Links {
  next: string;
}



export interface ListProgrammeResponse {
  data: Programme[];
}
export interface ProgrammeResponse {
  data: Programme;
}
