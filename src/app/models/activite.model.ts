
  export interface Link {
      rel: string;
      href: string;
  }

  export interface Activite {
      identifiant: number;
      code: string;
      date_debut: string;
      date_fin: string;
      libelle: string;
      activite_pip: boolean;
      mode: string;
      montant: number;
      poids: number;
      _exercice: string;
      _action: string;
      _structure_executant: string;
      _user: string;
      created_at: string;
      updated_at: string;
      links: Link[];
  }
  export interface ActiviteExport {
      identifiant: number;
      code: string;
      date_debut: string;
      date_fin: string;
      libelle: string;
      activite_pip: boolean;
      mode: string;
      montant: number;
      poids: number;
      _exercice: string;
      _action: string;
      _structure_executant: string;

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

  export interface ListActiviteResponse {
      data: Activite[];
      meta: Meta;
  }

  export interface SourceFinancementActivite {
    id: number;
    montant: number;
}

export interface CreateActivite {
    started_at: string;
    libelle: string;
    poids: number;
    montant: number;
    action_id: number;
    structure_id: number;
    est_pip: boolean;
    source_financement: SourceFinancementActivite[];
    structures_impliquees: number[];
    structures_supervisions: number[];
    code: string;
}

export interface ActiviteResponse {
  data: Activite;
}


