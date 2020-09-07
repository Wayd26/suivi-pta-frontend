import {Programme} from './programme.model';


export interface Link {
      rel: string;
      href: string;
  }

  export interface Action {
    id: number;
    code: string;
    denomination: string;
    weight_in_result: number;
    _result: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    links: Link[];
  }

  export interface ActionExport {
    id: number;
    code: string;
    denomination: string;
    weight_in_result: number;
    _result: string;
}

  export interface Links {
      next: string;
  }


  export interface ListActionResponse {
      data: Action[];
  }


export interface ActionResponse {
  data: Action;
}



