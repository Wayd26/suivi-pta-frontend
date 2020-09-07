import {SourceFinancement} from './sourceFi.model';

export interface Link {
      rel: string;
      href: string;
  }

  export interface TypeSourceFinancement {
    id: number;
    denomination: string;
    code: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
      links: Link[];
  }
  export interface TypeSourceFinancementExport {
    identifiant: number;
    code: string;
    libelle: string;
}

export interface Links {
      next: string;
}

export interface ListTypeSourceFinancementResponse {
      data: TypeSourceFinancement[];
  }

export interface TypeSourceFiResponse {
  data: TypeSourceFinancement;
}



