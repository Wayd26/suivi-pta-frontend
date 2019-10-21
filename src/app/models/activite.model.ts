
  export interface Link {
      rel: string;
      href: string;
  }

  export interface Activite {
    id: number;
    code: string;
    denomination: string;
    execution_mode: string;
    budget: number;
    weight_in_action: number;
    weight_in_subaction: number;
    started_on: string;
    ended_on: string;
    is_pip: boolean;
    _subaction: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
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

  export interface ListActiviteResponse {
      data: Activite[];
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


