
  export interface Link {
      rel: string;
      href: string;
  }

  export interface Departement {
      identifiant: number;
      code: string;
      denomination: string;
      _user: string;
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

  export interface ListDepartementResponse {
      data: Departement[];
      meta: Meta;
  }
  export interface DepartementResponse {
      data: Departement;
  }

