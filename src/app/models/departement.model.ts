
  export interface Link {
      rel: string;
      href: string;
  }

  export interface Departement {
    id: number;
    code: string;
    denomination: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
      links: Link[];
  }
  export interface DepartementExport {
    identifiant: number;
    code: string;
    denomination: string;
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

  export interface ListDepartementResponse {
      data: Departement[];
      meta: Meta;
  }
  export interface DepartementResponse {
      data: Departement;
  }

