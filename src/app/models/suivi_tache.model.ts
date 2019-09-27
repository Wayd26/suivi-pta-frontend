
export interface Link {
  rel: string;
  _tache: string;
  href: string;
  _user: string;
  _activite: string;
}

export interface SuiviTache {
  id: number;
  started_at: string;
  end_at: string;
  real_end_at?: any;
  commentaire: string;
  est_realisee: boolean;
  poids: number;
  montant: number;
  created_at: string;
  updated_at: string;
  links: Link[];
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: any[];
}

export interface Meta {
  pagination: Pagination;
}

export interface ListeSuiviTachePesponse {
  data: SuiviTache[];
  meta: Meta;
}


export interface SuiviTachePesponse {
  data: SuiviTache;
}
