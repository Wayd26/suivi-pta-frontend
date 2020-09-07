
export interface Link {
  rel: string;
  href: string;
  _user: string;
  // _activite: string;
  // _tache: string;
}

export interface SuiviTache {
  id: number;
  started_on: string;
  ended_on: string;
  effective_end_date: string;
  comment: string;
  is_realized: boolean;
  budget: number;
  weight_in_activity: number;
  _activity: string;
  _task: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  links: Link[];
}

export interface Links {
  next: string;
}


export interface ListeSuiviTachePesponse {
  data: SuiviTache[];
}


export interface SuiviTacheResponse {
  data: SuiviTache;
}
