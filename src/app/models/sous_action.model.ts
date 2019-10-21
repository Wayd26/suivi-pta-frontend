
export interface Link {
  rel: string;
  href: string;
}

export interface SousAction {
  id: number;
  code: string;
  denomination: string;
  weight_in_action: number;
  _action: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  links: Link[];
}


export interface Links {
  next: string;
}


export interface ListSousActionResponse {
  data: SousAction[];
}


export interface SousActionResponse {
  data: SousAction;
}



