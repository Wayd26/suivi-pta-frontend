import {Structure} from './structure.model';
import {Ville} from './ville.model';

export interface Link {
      rel: string;
      href: string;
  }
export interface Pivot {
  activity_id: number;
  town_id: number;
}

export interface ActivityTown {
  id: number;
  backend_code: string;
  code: string;
  denomination: string;
  department_id: number;
  deleted_at?: any;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
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
    towns: ActivityTown[];
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

  export interface Indicator {
    id: number;
    backend_code: string;
    denomination: string;
    target_value?: any;
    realized_value?: any;
    activity_id: number;
    deleted_at?: any;
    created_at: string;
    updated_at: string;
  }

  export interface Pivot {
    activity_id: number;
    funding_id: number;
  }

  export interface Funding {
    id: number;
    backend_code: string;
    imputation_chapter?: any;
    code: string;
    is_project: number;
    denomination: string;
    weight_project: number;
    type_funding_id: number;
    deleted_at?: any;
    created_at: string;
    updated_at: string;
    pivot: Pivot;
    budget_allocated: number;
  }

  export interface Ministy {
    id: number;
    backend_code: string;
    code: string;
    po_box: string;
    email: string;
    denomination: string;
    abbreviation: string;
    website: string;
    cellphone: string;
    url_logo: string;
    town_id: number;
    deleted_at?: any;
    created_at: string;
    updated_at: string;
  }

  // export interface Structure {
  //   id: number;
  //   backend_code: string;
  //   po_box: string;
  //   code: string;
  //   abbreviation: string;
  //   denomination: string;
  //   email: string;
  //   website: string;
  //   url_logo?: any;
  //   cellphone: string;
  //   town_id: number;
  //   deleted_at?: any;
  //   created_at: string;
  //   updated_at: string;
  // }

  export interface StructureActivite {
    ministy: Ministy;
    structure: Structure;
    type: number;
    ministry_structure_id: number;
  }

  export interface Pivot2 {
    activity_id: number;
    town_id: number;
  }

  export interface Town {
    id: number;
    backend_code: string;
    code: string;
    denomination: string;
    department_id: number;
    deleted_at?: any;
    created_at: string;
    updated_at: string;
    pivot: Pivot2;
  }

  export interface Link {
    rel: string;
    href: string;
  }

  export interface DataActivite {
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
    trask_tracked: any[];
    indicators: Indicator[];
    fundings: Funding[];
    structures: StructureActivite[];
    towns: Town[];
    _subaction: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    links: Link[];
  }

  export interface OneActiviteResponse {
    data: DataActivite;
  }


