
export interface Link {
    rel: string;
    href: string;
  }

  export interface SourceFinancement {
    id: number;
    code: string;
    denomination: string;
    imputation_chapter?: any;
    is_project: boolean;
    weight_project: number;
    _type_funding: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
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

  export interface ListSourceFinancementResponse {
    data: SourceFinancement[];
  }

export interface SourceFiResponse {
  data: SourceFinancement;
 }
